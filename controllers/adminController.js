import { comparePassword, hashPassword } from "../helper/authHelper.js";
import adminModel from "../models/adminModel.js";

//Register || Post
export const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email) {
      return res.send({
        message: "Email required",
      });
    }
    if (!name) {
      return res.send({
        message: "Name required",
      });
    }
    if (!password) {
      return res.send({
        message: "Password required ",
      });
    }
    const esistingAdmin = await adminModel.findOne({ email });
    if (esistingAdmin) {
      return res.status(200).send({
        success: true,
        message: `Already Register Please Login`,
      });
    }
    const hashedPassword = await hashPassword(password);
    const admin = await new adminModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "Admin Register Successfully",
      admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Error in Registeration",
      error,
    });
  }
};


//Login || POST
export const loginControler = async (req, res) =>{
    try {
        const { email , password} = req.body; 
        if(!email || !password){
            return res.status(404).send({
            success:false , 
            message:"invalid Email and Password", 
            })
        }
        const admin = await adminModel.findOne({email});
        if(!admin){
            return res.status(404).send({
                success:false, 
                message:"Email is not Register , Contact Developers"
            })
        }
        const match = await comparePassword(password , admin.password);
        if(!match){
            return res.status(200).send({
                success:false, 
                message:"Inavlid Passord"
            })
        }
        if(match){
            return res.status(200).send({
                success:true,
                message:`Login sucessfully`, 
                admin:{
                    name:admin.name, 
                    email:admin.email
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false, 
            message:"Error in login", 
            error, 
        })
    }
}