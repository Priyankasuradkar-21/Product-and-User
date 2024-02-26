const jwt = require('jsonwebtoken');
const User = require('../model/user');

const userValidation = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'secretKey');
        console.log(JSON.stringify(decoded));
        const user = await User.findOne({ where: { email: decoded.userId.trim() } });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized user'
            });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
};

module.exports = userValidation;
