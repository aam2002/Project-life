import express from "express";
import colors from "colors";
import dotenv from "dotenv";
// import morgan from "morgan";
import connectDB from "./config/db.js";
import routes from "./routes/routes.js";
import cors from "cors";

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());;
app.use(cors());

//routes
app.use("/api", routes);

//api
app.get("/", (req, res) => {
  res.send("look its working cool!!!");
});

//host
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`.blue);
});
