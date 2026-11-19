
import axios from "axios"
import { ServerUrl } from "../App";

export const chatMessage = async (message) => {
    const res = await axios.post(`${ServerUrl}/api/chat/ask-gemini`, { message })
    return res.data
}   