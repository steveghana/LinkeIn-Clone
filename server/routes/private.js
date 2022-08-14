import express from "express";
const privateRouter = express.Router();
import { getPrivateRoute } from "../controllers/private.js";
// import { protect } from "../middleware/auth.js";

privateRouter.route("/").get(getPrivateRoute);

export default privateRouter;
