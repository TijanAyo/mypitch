import {Request, Response, NextFunction} from 'express'

const signUpHandler = (_req:Request, res:Response) => {
    return res.render('signin')
}

const signInHandler = (_req:Request, res:Response) => {
    return res.render('signup')
}

const logOutHandler = (req:Request, res:Response, next:NextFunction) => {
    req.session.destroy(function(err:any) {
        if(err) {
            next(err)
        }
        return res.redirect('/')
    })
}


export {
    signUpHandler,
    signInHandler,
    logOutHandler
}

