const express =  require('express');
const app = express();
 var mysql = require('mysql');

 var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'demo'});


 const bodyParser = require('body-parser');
 const PORT = 4200;
 const cors = require('cors');
 

 app.use(cors());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());

 app.post("/add",function(req,res){
   console.log("welcome");
   var name = req.body.name;
   var port = req.body.port;
    console.log(name+"   "+port);
    var sql = "insert into record (name,port) values('"+name+"','"+port+"')";
con.query(sql,function(err,rows){
  if(err) throw err;
  console.log("Record Added");
})


 })


 app.listen(PORT,function(){
   console.log("Server is running on Port: ", PORT);
 })
