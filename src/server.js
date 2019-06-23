var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/books',function(req,res)
{
  let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'))
   res.json(jsonData)
})

app.post('/books/add',function(req,res){
   var pushdata = req.body
   console.log(pushdata);
   const data = fs.readFileSync('books.json');
   const json = JSON.parse(data);
   if(!!json && json.length >= 1)
   {
    
    pushdata._id = parseInt(json[json.length-1]._id+1)
  
   }
   else
   {
    pushdata._id = 1;
   }
   
   json.push(pushdata);
   const jsonString = JSON.stringify(json)
      fs.writeFile('books.json', jsonString, err => {
    if (err) {
        return res.json({stauts:400})
    } else {
      //let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
      return res.json(pushdata)
    }
      })
})


app.post('/books/update/:_id',function(req,res){
   
   const _id = parseInt(req.params._id);
   const req_data = req.body;
   req_data._id = _id
   const data = fs.readFileSync('books.json');
   var jsonarray = JSON.parse(data);
   for (var i = 0; i < jsonarray.length; i++) {
      
      if (jsonarray[i]._id === parseInt(_id)) {
       
        jsonarray[i] = req_data;
      }
    }
   
   const jsonString = JSON.stringify(jsonarray)
      fs.writeFile('books.json', jsonString, err => {
    if (err) {
      return res.json({stauts:400})
    } else {
      let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
      return res.json(jsonData)
    }
      })
})


app.get('/books/viewbook/:_id',function(req,res){
  const _id = parseInt(req.params._id);
  const data = fs.readFileSync('books.json');
  var jsonarray = JSON.parse(data);
 
  for (var i = 0; i < jsonarray.length; i++){
 
    if (jsonarray[i]._id == _id){
      return  res.json(jsonarray[i])
    }
  }
 
})



app.get('/books/delete/:_id',function(req,res){
   
  var req_id = req.params._id;
  const data = fs.readFileSync('books.json');
  var jsonarray = JSON.parse(data);
   jsonarray = jsonarray.filter(function( obj ) {
    return obj._id !== parseInt(req_id);
    });

   const jsonString = JSON.stringify(jsonarray);
     fs.writeFile('books.json', jsonString, err => {
   if (err) {
    return res.json({stauts:400})
   } else {
     let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
     return res.json(jsonData)
   }
     })
})




var server = app.listen('8080',function(req,res){
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http:://%s:%s", host, port);
})


