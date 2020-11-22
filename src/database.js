const mongoose = require('mongoose');

const { TORRE_MONGODB_HOST, TORRE_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${TORRE_MONGODB_HOST}/${TORRE_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(db => console.log('Database is connected'))
    .catch(err => console.log(err));