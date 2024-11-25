import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import connectDB from "./db/dbindex.js";
import app from "./app.js";
//const PORT = process.env.PORT || 8000; // Use the PORT from .env or fallback to 5000
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        `connection successfull!! server is running at port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("server error", error);
  });
