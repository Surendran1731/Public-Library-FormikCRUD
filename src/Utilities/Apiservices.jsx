import axios from "axios"
 

const API_KEY = 'https://664f61bcec9b4a4a602e94d1.mockapi.io'
export const axiosService = axios.create({
    baseURL:API_KEY,
    headers:{
        "Content-Type":"application/json"
    }
})

