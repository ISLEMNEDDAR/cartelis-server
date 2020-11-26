import express from 'express'; // to handle the differnet http request put,get,post
import middlware from "./config/middelware";
const app = express();

/*
    middlwares
 */
middlware(app);
/*
    PORT
 */
const PORT = 3600;




var server = async ()=>{
    app.listen(PORT,err =>{
        if(err){
            console.error(err)
        }else{
            console.log('App listen to port '+PORT)
        }
    });
}
server().then(() => console.log("connected"))