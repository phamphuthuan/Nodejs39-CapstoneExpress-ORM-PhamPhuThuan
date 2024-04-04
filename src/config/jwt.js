import jwt from "jsonwebtoken";
import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize);

const createToken = (data) => {
    return jwt.sign(data, 'Node39', {expiresIn: "5y"});
};

const checkToken = (token) => {
    return jwt.verify(token, "Node39", (err, decoded) => {
        if (err) {
            return {
                statusCode: 401,
                message: "Invalid token"
            }
        }
        return {
            statusCode: 200,
            data: decoded
        }
    });
}

const khoaAPI = async (req, res, next) => {
    let {token} = req.headers;
    if (token) {
        let verifyToken = checkToken(token);
        if (verifyToken.statusCode == 401) {
            res.status(401).send("Invalid token")
            return
        }
        let {nguoi_dung_id} = verifyToken.data;
        let checkNguoiDung = await conn.nguoi_dung.findOne({
            where: {
                nguoi_dung_id: nguoi_dung_id
            }
        })
        if (!checkNguoiDung) {
            res.status(401).send("Invalid token");
            return
        }
        next();
    } else {
        res.status(401).send("Unauthorrized");
        return
    }
}

export {createToken, checkToken, khoaAPI};