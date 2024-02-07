const addressModel = require('../models/address.model');

const getAddress=async(req,res)=>{
    const {userId}=req.body;
    console.log('addresj',userId)
    try {
        const address = await addressModel.find({ user_id:userId})
        console.log(address,'g')
        return res.status(200).send(address)
    } catch (error) {
        console.log(error)
        return res.status(400).send('Internal server error: ',error)
    }
}

const addAddress = async (req, res) => {
    const {userId,country,name,mobile,flatNo,area,landmark,pincode,townCity,state}=req.body;
    if (!name || !mobile || !flatNo || !area || !landmark || !pincode||!townCity||!state){
        return res.send('Fill all field');
    }
    try {
        const address = await new addressModel({user_id:userId,country, name, mobile, flatNo, area, landmark, pincode, townCity, state})
        address.save();
        return res.status(200).send('Address saved')
    } catch (error) {
        return res.status(500).send('Internal server error:',error)
    }
}

const editAddress = async (req, res) => {
    const { userId,...updateFields } = req.body;
    const {id}=req.params; 
    try {
        const address = await addressModel.findByIdAndUpdate({ user_id: userId,_id:id },updateFields)
        return res.status(200).send(address,'User address is updated..')
    } catch (error) {
        console.log(error)
        return res.status(400).send('Internal server error: ', error)
    }
}

const deleteAddress = async (req, res) => {
    const { userId } = req.body;
    const {id} = req.params;
    console.log(id)
    try {
        const address = await addressModel.findByIdAndDelete({ user_id: userId, _id: id })
        console.log(address)
        return res.status(200).send('deleted successfully')
    } catch (error) {
        console.log(error)
        return res.status(400).send('Internal server error: ', error)
    }
    res.send('delete..')
}

module.exports = { getAddress, addAddress, editAddress, deleteAddress }