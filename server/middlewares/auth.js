const { secretKey } = require("../keys")
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // console.log(req.cookies.jwt)
    // console.log(req.cookies)
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({
            message: "token not found!"
        });
    } 

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "token invalid!"
            });
        }
        // console.log(decoded)
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware