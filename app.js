// import {MongoClient} from 'mongodb';
import mongoose from "mongoose";
import nodeCron from "node-cron";

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });
const userSchema = new mongoose.Schema ({
  name:{
    type: String,
    required: [true, "No name specified"]
  }
});

const User = mongoose.model("User", userSchema);
let user = 0;
async function addUserDB(){
  const userOne = new User({
    name: `Baqir${user}`
  });
  await userOne.save();
  user++;
  console.log('inserted');
}
// userOne.save();



const job = nodeCron.schedule("*/1 * * * *", addUserDB);