import {CONFIG} from "../../config/constant";
import {google} from "googleapis";


export const oauthConnect = async () => {
    return generateURl(geto2AuthClient())
}

export const getTokendAuth =(token) =>{
    return setCredential(geto2AuthClient(),token)
}

export const getToken = async (code)=> {
    let token = geto2AuthClient().getToken(code);
    const tokenResponse = await token.then(res => res)
    return tokenResponse.res.data
}

const setCredential = (auth,token) => {
    auth.setCredentials(token);
    return auth
}

const generateURl = (auth)=> {
    return auth.generateAuthUrl({
        access_type: 'offline',
        scope: CONFIG.SCOPES,
    })
}

export const geto2AuthClient = ()=>{
    const {client_secret, client_id, redirect_url} = CONFIG.TOKEN_CREDENTIALS;
    return new google.auth.OAuth2(client_id, client_secret, redirect_url);
}