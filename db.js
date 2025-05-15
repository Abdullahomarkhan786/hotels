const mongoose = require('mongoose');
//const mongoUrl = 'mongodb://localhost:27017/hotels'
const mongoUrl="mongodb+srv://f20210021:lv8oUb57i6P3Rece@cluster1.ijx2ur1.mongodb.net/myapp?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongodb");

})

db.on('error', (err) => {
    console.log("mongodb connection error", err);

})

db.on('disconnected', () => {
    console.log("disconnected mongodb");

})

module.export = db;