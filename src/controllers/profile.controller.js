const renderDashboard= (req, res) =>{
    return res.render('profile', {name: req.user})
}

module.exports = {
    renderDashboard
}