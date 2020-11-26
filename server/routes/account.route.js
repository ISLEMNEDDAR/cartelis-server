import {Router} from "express"
import {connect} from "../controller/account.controller";

const accountRouter = new Router()

accountRouter.get("/",connect)

export default accountRouter