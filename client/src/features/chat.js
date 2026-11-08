
import axios from "axios"
import { ServerUrl } from "../App";

export const chatMessage = async (message) => {
    try {
        const res = await axios.post(`${ServerUrl}/api/chat/ask-gemini`, { message })
        return res.data
    } catch (error) {
        console.log(error);
    }
}   