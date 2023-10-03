import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://bhagwatgeeta00001:uVo5fGtVlSgK4jSW@bhagwat.4qhydth.mongodb.net/`);
    console.log(`Conneted to MongoDB database ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.red);
  }
};

export default connectDB 