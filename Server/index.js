
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import chatRouter from "./routes/chat.route.js"

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

app.use("/api/chat", chatRouter)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})

