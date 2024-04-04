import {createToken} from '../config/jwt.js';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';

import bcrypt from 'bcrypt';

const conn = initModels(sequelize);

const signUP = async (req, res) => {
    try {
        let {email, password, full_name, age, avatar} = req.body;
        let data = await conn.nguoi_dung.findOne({
            where: {
                email: email
            }
        })
        if (data) {
            res.status(400).send("User is existed!");
        } else {
            let enCodePassword = bcrypt.hashSync(password, 10);
            let newUser = {
                ho_ten: full_name,
                email,
                mat_khau: enCodePassword,
                tuoi: age,
                anh_dai_dien: avatar
            }

            await conn.nguoi_dung.create(newUser);
            res.status(201).send("user is created!");
        }
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
}

export {
    signUP
}