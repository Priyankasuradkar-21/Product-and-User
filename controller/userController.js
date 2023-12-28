
const registerUser = async(req, res) => {
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const login = async(req, res) => {
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const getUserDetails = async(req, res) => {
    try{

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