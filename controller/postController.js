const createPost = () => {
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const getSpecificPost = async(req, res) => {
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

const getAllPost = async(req, res) => {
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

module.exports = {
    createPost,
    getAllPost,
    getSpecificPost
}