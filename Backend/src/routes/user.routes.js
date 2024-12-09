import { Router } from "express";
import {
  addComplaint,
  getComplaints,
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
//import { loginRateLimit } from "../middlewares/rateLimit.js";

const router = Router();
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(logoutUser);

router.route("/refresh-token").post(refreshAccessToken);
router.route("/addComplaint").post(addComplaint);
router.route("/getComplaints").get(getComplaints);

export default router;
