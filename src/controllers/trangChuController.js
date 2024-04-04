import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const Op = Sequelize.Op;
const conn = initModels(sequelize);

const getImage = async (req, res) => {
    let {page, size} = req.params;
    let num_page = Number(page);
    let num_size = Number(size);
    let index = (num_page - 1) * num_size;

    let {ImageName} = req.query;

    try {
        if (!ImageName) {
            ImageName = ""
        }
        let data = await conn.hinh_anh.findAll({
            where: {
                ten_hinh: {
                    [Op.like]: `%${ImageName}%`
                }
            },
            limit: num_size,
            offset: index
        });
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}

export {
    getImage,
}