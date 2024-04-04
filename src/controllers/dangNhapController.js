import {createToken} from '../config/jwt.js';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';

import bcrypt from 'bcrypt';

const conn = initModels(sequelize);

const signIn = async (req, res) => {
    try {
        let {email, password} = req.body;
        let data = await conn.nguoi_dung.findOne({
            where: {
                email: email
            }
        });
        if (data) {
            let checkPassword = bcrypt.compareSync(password, data.mat_khau)
            if (checkPassword) {
                let payload = {
                    email,
                    password,
                    nguoi_dung_id: data.nguoi_dung_id
                }
                let token = createToken(payload);
                res.status(200).send(token);
            } else {
                res.status(400).send("Email or Password incorrect! :((")
            }
        } else {
            res.status(404).send("Login fail! :((");
        }

    } catch (err) {
        res.send(err)
    }
}

export {
    signIn
}