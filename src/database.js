const mongoose = require('mongoose');

const { TORRE_REMOTE_MONGODB_USER, TORRE_REMOTE_MONGODB_PASS, TORRE_REMOTE_MONGODB_HOST, TORRE_REMOTE_MONGODB_NAME } = process.env;
// const MONGODB_URI = `mongodb://${TORRE_MONGODB_HOST}/${TORRE_MONGODB_DATABASE}`;

// MONGODB_URI = `mongodb+srv://node-dlcv:CIm06RCF2ufOqwBb@cluster0.x8xwn.mongodb.net/torre-cloud?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(db => console.log('Database is connected'))
    .catch(err => console.log(err));