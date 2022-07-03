import express from "express"
import {homePageHandler,
    aboutPageHandler,
    servicePageHandler} from "../controllers/index.controller"
const router = express.Router()

router.get('/', homePageHandler);
router.get('/about', aboutPageHandler);
router.get('/service', servicePageHandler);


export default router