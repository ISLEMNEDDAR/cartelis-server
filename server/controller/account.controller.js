import {response} from "../../build/utils/responseHandler";
import * as authUtils from "../utils/auth/oauth.utils";

const connect = async (req, res) => {
    try {
        const urlGenerated = await authUtils.oauthConnect()
        response(res,200,{message: {urlGenerated}})
    } catch (e) {

    }
}

const getToken = async (req,res) => {
    try{
        const code = req.query.code
        let token = await authUtils.getToken(code);
        let tokenString = '#'
        for(let key in token) tokenString += `${key}=${token[key]}& `
        res.redirect(`http://localhost:3000/${tokenString}`)
    }catch (e){
        console.log(e)
        response(res, 500, {message: "server Error"})
    }
}

export {
    connect,getToken
}