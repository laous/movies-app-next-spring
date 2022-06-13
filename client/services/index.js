import axios from "axios";


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
/* auth */


// Register user
export const register = async (userData) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LINK +"/user" , userData,config)

    if(response.data){
        if (typeof window !== 'undefined') { localStorage.setItem('movies-user' , JSON.stringify(response.data) )}
    }

    return response.data
}

// login 
export const login = async (userData) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LINK +"/user/login", userData , config)

    if(response.data){
        if (typeof window !== 'undefined') {localStorage.setItem('movies-user' , JSON.stringify(response.data) )}
    }

    return response.data
}

// logout
export const logout =  () => {
    if (typeof window !== 'undefined') {
    localStorage.removeItem('movies-user')
}
}

// 
export const addReview =async  (payload) => {
    const response =     await axios
    .post(process.env.NEXT_PUBLIC_API_LINK + "/user/review", payload , config)
    if(!response.data) return false

    return response.data
}