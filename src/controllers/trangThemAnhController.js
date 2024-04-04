import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const postSingleImage = async (req, res) => {
    try {
        let { originalname, path } = req.file;
        let { mo_ta, nguoi_dung_id } = req.body;

        let newImage = await conn.hinh_anh.create({
            ten_hinh: originalname,
            duong_dan: path,
            mo_ta,
            nguoi_dung_id,
        });
        res.send(newImage);
    } catch (error) {
        res.send(`BE ${error}`);
    }
};

const postMultipleImage = async (req, res) => {
    try {
        let images = req.files;
        let { mo_ta, nguoi_dung_id } = req.body;

        const createdImages = [];

        for (const image of images) {
            let { originalname, path } = image;
            let newImage = await conn.hinh_anh.create({
                ten_hinh: originalname,
                duong_dan: path,
                mo_ta,
                nguoi_dung_id,
            });
            createdImages.push(newImage);
        }

        res.send(createdImages);
    } catch (error) {
        res.send(`BE: ${error}`);
    }
};

export {
    postSingleImage,
    postMultipleImage
}