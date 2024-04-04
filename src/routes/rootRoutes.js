import express from "express";
import userRoutes from "./userRoutes.js";
import imgRoutes from "./imgRoutes.js";
import trangChiTietRoutes from "./trangChiTietRoutes.js";
import trangQuanLiRoutes from './trangQuanLiRoutes.js'

const rootRoutes = express.Router();

rootRoutes.use("/access", userRoutes);
rootRoutes.use("/image", imgRoutes);
rootRoutes.use("/info", trangChiTietRoutes);
rootRoutes.use("/user", trangQuanLiRoutes);

export default rootRoutes;