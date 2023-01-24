import axios from "axios"
import config from "../Config/Config"
const ApiLogin ={
    login : async (username, password)=>{
        let option ={
            url: config.base_url + 'auth/login',
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                username:username,
                password:password
            }
        }

        try {
            let result = await axios(option)
            return result.data
        } catch(error){
            return error
        }
    }
}

export default ApiLogin