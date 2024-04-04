import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

import bcrypt from "bcrypt";

const conn = initModels(sequelize);

const updateInfoUser = async (req, res) => {
    try {
        let {userID} = req.params;
        let {email, password, ho_ten, tuoi, anh_dai_dien} = req.body;
        let enCodePassword = bcrypt.hashSync(password, 10);
        let updateInfoUser = {
            email,
            mat_khau: enCodePassword,
            ho_ten,
            tuoi,
            anh_dai_dien
        }
        await conn.nguoi_dung.update((updateInfoUser), {
            where: {
                nguoi_dung_id: userID
            }
        });
        res.send("Update user successfull!!^_^");
    } catch(err) {
        res.send(`BE ${err}`)
    }
}

export {
    updateInfoUser
}