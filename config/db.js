import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Conneted to MongoDB database ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.red);
  }
};

export default connectDB 