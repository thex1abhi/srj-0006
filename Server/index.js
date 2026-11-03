
import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/connectDB.js"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import isAuth from "./middlewares/isAuth.js"
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

app.use("/api/auth", authRouter)
app.use("/api/user", isAuth , userRouter)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
    connectDB()
})

