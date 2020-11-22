const axios = require('axios')
const passport = require('passport');

const jobsController = {};

jobsController.renderSearch = (req, res) => {
    res.render('jobs/index');
}

jobsController.search = async(req, res) => {
    const errors = [];
    const { jobId } = req.body;
    if (jobId.length === 0) {
        errors.push({ text: 'El id de la oportunidad laboral no puede estar en blanco' });
    }
    if (errors.length > 0) {
        res.render('jobs/index', {
            errors,
            jobId
        });
    } else {
        url = `https://torre.co/api/opportunities/` + jobId;
        axios.get(url)
            .then(response => {
                data = response.data
                res.render('jobs/show', { data });
            })
            .catch(e => {
                // Capturamos los errores
            })
    }
}

module.exports = jobsController;