import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';

//configure env
dotenv.config();    // if in other folder, use path as javascript function //

//configure database
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//static files
app.use(express.static(path.join(__dirname, './client/build')))
//creating rest APIs
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})

//port
const PORT = process.env.PORT || 8080;

//to listen
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    );
});