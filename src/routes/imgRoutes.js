import express from "express";
import {getImage} from "../controllers/trangChuController.js"
import { khoaAPI } from "../config/jwt.js";
import uploadCloud from "../config/cloudinary.config.js"
import { postMultipleImage, postSingleImage } from "../controllers/trangThemAnhController.js";

const imgRoutes = express.Router();

imgRoutes.get("/get-image/:page/:size", khoaAPI, getImage);
imgRoutes.post("/post-img", khoaAPI, uploadCloud.single("file"), postSingleImage);
imgRoutes.post("/post-multiple-img", khoaAPI, uploadCloud.array("files"), postMultipleImage)

export default imgRoutes