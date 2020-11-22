const indexController = {};

indexController.renderIndex = (req, res, next) => {
    res.render('index');
};

indexController.renderAbout = (req, res, next) => {
    res.render('about');
};

module.exports = indexController;