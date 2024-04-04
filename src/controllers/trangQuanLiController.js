import sequelize from "../models/connect.js";
import hinh_anh from "../models/hinh_anh.js";
import initModels from "../models/init-models.js";
import nguoi_dung from "../models/nguoi_dung.js";

const conn = initModels(sequelize);

const getInfoUser = async (req, res) => {
    try {
        let data = await conn.nguoi_dung.findAll();
        res.send(data);
    } catch (err) {
        res.send(`BE ${err}`);
    }
}

const getImgSavedByUserID = async (req, res) => {
    try {
        let {userID} = req.params;
        let data = await conn.luu_anh.findAll({
            where: {
                nguoi_dung_id: userID
            }
        });

        if (data) {
            res.send(data);
        } else {
            res.send("User does not exist!!");
        }
    } catch (err) {
        res.send(`BE: ${err}`);
    }
}

const getImgCreatedByUserID = async (req, res) => {
    try {
        let {userID} = req.params;
        let data = await conn.hinh_anh.findAll({
            where: {
                nguoi_dung_id: userID,
            }
        });
        if (data) {
            res.send(data);
        } else {
            req.send("User does not exist!!");
        }
    } catch (err) {
        res.send(`BE: ${err}`);
    }
}

const deleteImageByID = async (req, res) => {
    try {
        const { imageID } = req.params;

        // Check if the image exists
        const image = await conn.hinh_anh.findOne({
            where: {
                hinh_id: imageID,
            },
        });

        if (!image) {
            return res.status(404).send("Image not found!");
        }

        // Delete the image
        await conn.hinh_anh.destroy({
            where: {
                hinh_id: imageID,
            },
        });

        res.send(`Image with ID ${imageID} has been deleted successfully.`);
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
};

export {
    getInfoUser,
    getImgSavedByUserID,
    getImgCreatedByUserID,
    deleteImageByID,
}