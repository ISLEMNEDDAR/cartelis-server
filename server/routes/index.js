import {Router} from "express"
import accountRoute from "./account.route"
import gSheetRoute from "./gsheet.route"
import {getToken} from "../controller/account.controller";
const router = new Router()

router.use("/account",accountRoute)
router.use("/gsheet",gSheetRoute)
router.get("/callback",getToken)
export default router