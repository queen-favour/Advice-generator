import axios from "axios";

const apiUrl = 	"https://api.adviceslip.com/advice"
const axiosInstance = axios.create({
    baseURL:apiUrl
})
axiosInstance.defaults.headers.common.Authorization = null
export default axiosInstance;