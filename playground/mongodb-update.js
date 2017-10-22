// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
       return console.log('Unable to connect to the MongoDB Server');
    }
    console.log('Connected to mongoDB server');

   db.collection('Todos').findOneAndUpdate({
       _id : new ObjectID('59e9e1bdf68ffd3ba5c2d904')
   },{
       $set : {
           completed : false
       }
   },{
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });

   db.collection('Users').findOneAndUpdate({
       name : 'Dhruv'
   },{
       $set : {
           name : 'Andrew'
       },
       $inc : {
           age : 1
       }
   },{
       returnOriginal : false
   }).then((result)=>{
       console.log(result);
   });


//db.close();
});