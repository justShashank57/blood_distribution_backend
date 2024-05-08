import express from "express";
import {
  testRoute,
  userLogin,
  userSignup,
} from "../Controllers/userController.js";

const router = express.Router();

//test route
router.get("/", testRoute);

// signup
router.post("/signup", userSignup);

//login
router.post("/login", userLogin);

export { router as userRoutes };
