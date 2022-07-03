const express = require("express")

const authCheck= (req, res, next) => {
    if(!req.user) {return res.redirect('/account/register')}
    next()
}

module.exports = authCheck