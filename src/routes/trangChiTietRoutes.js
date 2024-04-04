import express from "express";
import { khoaAPI } from "../config/jwt.js";
import { getInfoByID, getInfoComment, getInfoSaveImg, postCommentAndImage } from "../controllers/trangChiTietController.js";
import uploadCloud from '../config/cloudinary.config.js'

const trangChiTietRoutes = express.Router();

trangChiTietRoutes.get("/getInfoImage/:imageID", khoaAPI, getInfoByID);
trangChiTietRoutes.get("/getInfoComment/:imageID", khoaAPI, getInfoComment);
trangChiTietRoutes.get("/getInfoSaveImg/:imageID", khoaAPI, getInfoSaveImg);
trangChiTietRoutes.post("/postCommentAndImage", khoaAPI, postCommentAndImage);

export default trangChiTietRoutes