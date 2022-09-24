 const express=require('express')
const cors=require("cors")
const bodyParser=require("body-parser")
const client = require('./db/dbOperation')
const connectToMongoDb=require('./db/connect')
const ObjectID  = require('mongodb').ObjectId
 const app=express()
 app.use(cors())
 app.use(bodyParser.urlencoded({extended:true}))
 app.use(bodyParser.json())
 const port=3002
app.use(cors({origin:"*"}))

let  db= client.db("food")

// client.connect((dbconneror,client)=>{
//     if(dbconneror){
//         throw dbconneror
//     }
//     else{
      
//        const dblist=client.db().admin().listDatabases();
//        if(dblist.databases){
//        dblist.databases.forEach(db=>{console.log("list"+db.name)})}
//     }
// })


connectToMongoDb()


app.post('/addfooddetails',(req,res)=>{
    if(db){
db.collection('foodDetails').insertOne(req.body,(err,result)=>{
    if(err){
        throw err
    }else{
        res.send({status:200,message:"food details aded succesfully"})
    }
})}else{
    res.send({status:500,message:"server side error"})
}
})


app.post('/postuserdetails',(req,res)=>{
    if(db){
db.collection('userDetails').insertOne(req.body,(err,result)=>{
    if(err){
        throw err
    }else{
        res.send({status:200,message:"user details aded succesfully"})
    }
})}else{
    res.send({status:500,message:"server side error"})
}
})
app.put("/updatefooddetails",(req,res)=>{
db.collection("foodDetails").updateOne({_id:ObjectID(req.body.id)},{
    $set:{
        restaurentName:req.body.restaurentName,
        restaurentAddress:req.body.restaurentAddress,
        foodName:req.body.foodName,
        foodDescription:req.body.foodDescription,
        foodImage:req.body.foodImage,
        foodCost:req.body.foodCost
    }
},(err,result)=>{
    if(err){
        throw err
    }else{
        res.send({status:200,message:"food details aded succesfully"})
    
    }
}

)
})


app.get("/viewuserdetails",(req,res)=>{
    db.collection('userDetails').find({}).toArray((err,result)=>{
        if(err){
            throw err
        }else{
            res.send({status:200,message:"food details aded succesfully",data:result})
        
        }
    })
          
})
app.get("/viewfooddetails",(req,res)=>{
    db.collection('foodDetails').find({}).toArray((err,result)=>{
        if(err){
            throw err
        }else{
            res.send({status:200,message:"food details aded succesfully",data:result})
        
        }
    })
          
})

app.delete("/deletefooddetails",(req,res)=>{
    db.collection("foodDetails").findOneAndDelete({_id:ObjectID(req.body.id)},(err,result)=>{
        if(err){
            throw err
        }else{
            res.send({status:200,message:"food details deleted succesfully"})
        
        }
    })
})

//.then(()=>{console.log("MB connected")
// }).catch((err)=>{console.log(err)})

app.get('/',(req,res)=>{
    res.send("hello chandan")
})

app.listen(port,()=>{
    console.log(`server running at:${port}`)
})