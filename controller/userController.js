const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res) => {
    try{
        const {username, email, password} = req.body;
        console.log(req.body);
        if(!username || !password || !email){
            return res.status(404).json({error: 'Please provide required fields'});
        }

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
          return res.status(403).json({ error: 'Email is already in use' });
        }

        const encryptedPassword = await bcrypt.hash(password, 12);
        console.log(encryptedPassword, password);
        const user = {
            username,
            email,
            passwords: encryptedPassword
        }

        const userCreated = await User.create(user);
        return res.status(201).json({ message: 'User created successfully' });
    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({where: {email : email}});
        if(!user) 
            return res.status(401).json({ error: 'Invalid email or password' });

        console.log(user);
        const passwordMatch = await bcrypt.compare(password, user.passwords);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: email }, 'secretKey');
        return res.status(200).json({ token });
    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const getUserDetails = async(req, res) => {
    try{
        const getUserDetailsRequest = await User.findOne({where : { email : req.user.email}})
        return res.status(200).json({
            id : getUserDetailsRequest.id,
            username : getUserDetailsRequest.username,
            email : getUserDetailsRequest.email.trim(),
            createdAt : getUserDetailsRequest.createdAt,
            updatedAt : getUserDetailsRequest.updatedAt
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

module.exports = {
    registerUser,
    login,
    getUserDetails
}