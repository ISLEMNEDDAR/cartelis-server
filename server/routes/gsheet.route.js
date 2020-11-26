import {Router} from "express"
import {deduplicate, getListSheets} from "../controller/gsheet.controller";

const gSheetRoute = new Router()

gSheetRoute.get("/listSheets",getListSheets)
gSheetRoute.post("/deduplicate",deduplicate)

export default gSheetRoute