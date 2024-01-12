const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "title is required"],
    },
    seat: {
      type: String,
      required: [true, "description is require"],
    },
    total: {
      type: String,
      required: [true, "image is require"],
    },
    img:{
      type: String,
      required: [true, "img is require"],
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: [true, "user id is required"],
      },
    
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;