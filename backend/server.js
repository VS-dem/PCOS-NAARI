import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests : req.body
app.use(cookieParser()); //alows us to parse cookie's : req.cookies 

app.use("/api/auth",authRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${port}`);
})