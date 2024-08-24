import axiosInstance from "../utils/axiosConfig"

export const getQuote =() =>{
    try {
        const response = axiosInstance.get()
        console.log(response)
        return  response
    } catch (error) {
        throw error
    }
}