const {MongoClient}=require('mongodb')

  module.exports = async function connectToMongoDb(){
    const uri=""
    const client=new MongoClient(uri)
    try{
        await client.connect();
        await listDatabases(client);
    }catch(e){
      console.log(e)
    }finally{
        await client.close();
    }
}

async function listDatabases(client){
    const dblist= await client.db().admin().listDatabases();
console.log('uib')
    dblist.databases.forEach(db=>{console.log("list"+db.name)})}
 
