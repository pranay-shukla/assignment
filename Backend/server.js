const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


const mongoose = require('mongoose');
const app = require('./app');


mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then(() => {
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured', error.message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server has started...');
})