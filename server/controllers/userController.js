import User from "../mongodb/models/user.js";

const getAllusers = async (req, res) => {};


const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
    
        const userExists = await User.findOne({ email });
    
        if (userExists) return res.stats(200).json(userExists);
    
        const newUser = await User.create({
            name,
            email,
            avatar
        })
    
        res.status(200).json(newUser);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};


const getUserInfoByID = async (req, res) => {};

export {
    getAllusers,
    createUser,
    getUserInfoByID,
}

