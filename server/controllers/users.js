import mongoose from "mongoose"
import users from '../models/auth.js'

export const getAllUsers = async(req,res)=>{
try {
    const allUser =await users.find();
    // console.log(allUser)
    const allUserDetails = []
    allUser.forEach(users => {
        allUserDetails.push({_id : users._id, name : users.name, about : users.about, tags : users.tags, joinedOn : users.joinedOn})
    })
    res.status(200).json(allUserDetails); // return this array to the frontend
} catch (error) {
    res.status(400).json({message:error.message});
}
}

export const updateProfile = async (req,res) =>{
    const { id:_id } = req.params;
    const { name, about, tags } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...'); 
    }

    try {
        const updatedProfile = await users.findByIdAndUpdate( _id, { $set: {'name':name, 'about':about, 'tags':tags}},{ new:true })
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message:error.message })
    }
    
}