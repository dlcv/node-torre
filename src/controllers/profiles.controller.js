const axios = require('axios')
const passport = require('passport');

const profilesController = {};

profilesController.renderSearch = (req, res) => {
    res.render('profiles/index');
}

profilesController.search = async(req, res) => {
    const errors = [];
    const { username } = req.body;
    if (username.length === 0) {
        errors.push({ text: 'El nombre de usuario no puede estar en blanco' });
    }
    if (errors.length > 0) {
        res.render('profiles/index', {
            errors,
            username
        });
    } else {
        url = `https://torre.bio/api/bios/` + username;
        axios.get(url)
            .then(response => {
                data = response.data
                res.render('profiles/show', { data });
            })
            .catch(e => {
                // Capturamos los errores
            })
    }
}

module.exports = profilesController;