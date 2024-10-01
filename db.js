const mongoose = require('mongoose');
//const mongoUrl = 'mongodb://localhost:27017/onlinecourse';
//const mongoUrl ='mongodb+srv://nikitadesai0796:Yvik8dJDrK10KMDy@cluster0.mpxux.mongodb.net/'
const mongoUrl=process.env.MongoURL

mongoose.connect(MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection ;

db.on('connected',()=>{
    console.log("connected mongodb server")
} );
db.on('error',()=>{
    console.log("error while connecting",err)
});