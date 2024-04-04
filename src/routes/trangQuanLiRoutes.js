import express from 'express';
import { deleteImageByID, getImgCreatedByUserID, getImgSavedByUserID, getInfoUser,  } from '../controllers/trangQuanLiController.js';
import { khoaAPI } from '../config/jwt.js';
import { updateInfoUser } from '../controllers/trangChinhSuaTTCN.js';

const trangQuanLiRoutes = express.Router();

trangQuanLiRoutes.get("/getInfoUser", khoaAPI, getInfoUser);
trangQuanLiRoutes.get("/getImgSavedByUserID/:userID", khoaAPI, getImgSavedByUserID);
trangQuanLiRoutes.get("/getImgCreatedByUserID/:userID", khoaAPI, getImgCreatedByUserID);
trangQuanLiRoutes.delete("/deleteImageByID/:imageID", khoaAPI, deleteImageByID);
trangQuanLiRoutes.put("/update-user/:userID", khoaAPI, updateInfoUser);

export default trangQuanLiRoutes