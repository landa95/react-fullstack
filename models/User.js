const mongoose = require("mongoose");
//line 5 and 6 are the same:
//The mongoose object has a property Schema take that property and assign it to a
// new variable called Schema
//const Schema = mongose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
