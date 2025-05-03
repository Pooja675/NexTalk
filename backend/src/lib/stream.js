import {StreamChat} from "stream-chat";
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API key of Secret is missing")
}

const streamChat = StreamChat.getInstance(apiKey, apiSecret)

export const upsertStreamUser = async (userData) => {

    try {
        await streamChat.upsertUsers([userData])
        return userData;
    } catch (error) {
        console.error("Error upserting stream user", error)
    }
}

//todo : do it later

//export const generateStreamToken  = (userId) = {}