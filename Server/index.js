
import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/connectDB.js"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.get("/", (req, res) => {
    res.json(`Hello from server `)
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectDB()
})

