const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const orderModel = require("../models/orderModel");

exports.createOrderController = async(req,res)=>{
    try {
        const { name, seat, total,img, user } = req.body;
        //validation
        if (!name || !seat || !total ||!img|| !user) {
          return res.status(400).send({
            success: false,
            message: "Please Provide All Fields",
          });
        }
        const exisitingUser = await userModel.findById(user);
        //validaton
        if (!exisitingUser) {
          return res.status(404).send({
            success: false,
            message: "unable to find user",
          });
        }
    
        const newOrder = new orderModel({ name, seat, total,img, user });
        const session = await mongoose.startSession();
        session.startTransaction();
        await newOrder.save({ session });
        exisitingUser.order.push(newOrder);
        await exisitingUser.save({ session });
        await session.commitTransaction();
        await newOrder.save();
        return res.status(201).send({
          success: true,
          message: "Order Created!",
          newOrder,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send({
          success: false,
          message: "Error While Creating order",
          error,
        });
      }
};



exports.userOrderControlller = async (req, res) => {
    try {
      const userOrder = await userModel.findById(req.params.id).populate("order");
  
      if (!userOrder) {
        return res.status(404).send({
          success: false,
          message: "orders not found with this id",
        });
      }
      return res.status(200).send({
        success: true,
        message: "user orders",
        userOrder,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "error in user order",
        error,
      });
    }
  };