import {Request, Response } from "express"

const homePageHandler = (_req:Request, res: Response) => {
    return res.render('index')
}

const aboutPageHandler = (_req:Request, res: Response) => {
    return res.render('about')
}

const servicePageHandler = (_req:Request, res: Response) => {
    return res.render('service')
}

export {
    homePageHandler,
    aboutPageHandler,
    servicePageHandler
}