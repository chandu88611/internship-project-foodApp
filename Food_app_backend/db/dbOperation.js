  
const  MongoClient=require('mongodb').MongoClient
   const mb=""
  
  
  const client=new MongoClient(mb,{
  
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
 })

 module.exports=client;