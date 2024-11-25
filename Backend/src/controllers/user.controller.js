import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    //console.log(userId);
    const userInstance = await User.findById(userId);
    //console.log(userInstance);
    const accessToken = await userInstance.generateAccessToken();
    const refreshToken = await userInstance.generateSessionToken();
    userInstance.refreshToken = refreshToken;
    userInstance.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(400, "something went wrong while generating the tokens");
  }
};

// const registerUser = async (req, res, next) => {
//   try {
//     await res.status(200).json({
//       message: "OK",
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// };
const registerUser = asyncHandler(async (req, res) => {
  //get the input from the user or frontend
  //validate the input
  //check if the user is already exists
  //create user object-create entry in db
  //remove the password and refresh token feild form response
  //check for user creation
  //return response

  const { username, fullname, email, password, mobile, address, adhaar } =
    req.body;

  if (
    !fullname ||
    !email ||
    !username ||
    !password ||
    !mobile ||
    !address ||
    !adhaar
  ) {
    throw new ApiError(400, "All feilds are required");
  }

  const existedUser = await User.findOne({
    username,
  });

  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  const newUser = await User.create({
    fullname,
    email,
    username,
    password,
    mobile,
    address,
    adhaar,
  });
  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering the user");
  }
  // console.log(createdUser);

  return res
    .status(200)
    .json(new ApiResponse(200, newUser, "user registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    throw new ApiError(400, "username is required");
  }
  if (!password) {
    throw new ApiError(400, "password is required");
  }

  const existedUser = await User.findOne({ username });
  if (!existedUser) {
    throw new ApiError(404, "you are not registered yet");
  }

  const isPasswordValid = await existedUser.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(404, "invalid user credentials");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(existedUser._id);

  //const accessToken = existedUser.generateAccessToken();

  const options = {
    httpOnly: true,
    secure: true, // Ensure this is true if using HTTPS
    sameSite: "None",
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: existedUser, accessToken },
        "user logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  //console.log(req.user);
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );
  const options = {
    path: "/",
    secure: true,
    sameSite: "None",
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
  // .json({
  //   tokens: { accessToken, refreshToken },
  // });
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken != user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired or used");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };
    const { accessToken, newRefreshToken } =
      await generateAccessTokenAndRefreshToken(user?._id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
  }
});

export { refreshAccessToken, loginUser, logoutUser, registerUser };
