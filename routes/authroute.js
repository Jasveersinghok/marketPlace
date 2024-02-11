import Express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
  updateProfileController,
} from "../controller/authcontroller.js";
import { isAdmin, requireSignIn } from "../Middleware/authMiddleware.js";
//router  object
const router = Express.Router();
//routing
//Register || Method Post

router.post("/register", registerController);

//Login || Method Post

router.post("/login", loginController);

//Test Route

router.get("/test", requireSignIn, isAdmin, testController);

//Forget password
router.post("/forgot-password", forgotPasswordController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//Admin middleware
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;
