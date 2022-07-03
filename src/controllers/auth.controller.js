const signUpHandler = (_req, res) => {
    return res.render('signin')
}

const signInHandler = (_req, res) => {
    return res.render('signup')
}

const logOutHandler = (req, res, next) => {
    req.session.destroy(function(err) {
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

