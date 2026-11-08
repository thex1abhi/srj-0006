

import express from "express"
import { askChatbot } from "../controllers/chat.controller.js"


const chatRouter = express.Router()

chatRouter.post("/ask-gemini",  askChatbot )


export default chatRouter

