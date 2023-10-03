import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
name:{
   type:String,
   require:true, 
   trim : true
},
email:{
   type:String,
   require:true, 
   trim : true
},
password:{
   type:String,
   require:true
},
},{
   timestamps:true
})

export default mongoose.model('admin', adminSchema)