import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from "helmet"
import apiRoutes from "../routes";
import cors from "cors";

// to avoid cors exception
const setHeader = (req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'POST,GET,OPTIONS')
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization")
    if(req.method === "OPTIONS"){
        return res.sendStatus(200)
    }
    next()
}

export default (app)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(morgan('dev'));
    app.use(cors())
    app.use(helmet())
    app.use((req,res,next)=>{
        setHeader(req,res,next)
    })
    app.use('/api',apiRoutes)
}