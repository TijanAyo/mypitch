const homePageHandler = (_req, res) => {
    return res.render('index')
}

const aboutPageHandler = (_req, res) => {
    return res.render('about')
}

const servicePageHandler = (_req, res) => {
    return res.render('service')
}

module.exports = {
    homePageHandler,
    aboutPageHandler,
    servicePageHandler
}