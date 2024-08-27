import { v4 as uuidv4 } from 'uuid';
import User from '../models/user.model.js';
//get all the user
const getAlluser = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users);
    }catch (error) {
        res.status(500).send(error.message); 
    }   
}

//get one user

const getOneUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }); // Fixed "perams" to "params"
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}

// This part creates a new user
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}

const updateUser =async (req, res) => {
    
    try {
        const user = await User.findOne({ id: req.params.id });
        user.name=req.body.name
        user.age=Number(req.body.age)
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}

const deleteUser =async (req, res) => {
    try {
        await User.deleteOne ({ id: req.params.id }); // Fixed "perams" to "params"
        res.status(200).json({message:"user is deletd"});
    }catch (error) {
        res.status(500).send(error.message); 
    }
}

// Export all functions as an object
export default {
    getAlluser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};
