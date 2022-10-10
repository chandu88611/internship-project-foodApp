  
const  MongoClient=require('mongodb').MongoClient
   const mb="mongodb+srv://chandan:2xcVW4SPf.SdAYU@cluster0.wnqqekd.mongodb.net/?retryWrites=true&w=majority"

  
  
  
  const client=new MongoClient(mb,{
  
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
 })

 module.exports=client;