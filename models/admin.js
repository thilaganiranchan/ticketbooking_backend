const mongoose = require("mongoose");

const signupData = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true,
    unique: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const adminmodel = mongoose.model("admins", signupData);

module.exports = adminmodel;
