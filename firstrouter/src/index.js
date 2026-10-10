/* import http from "http";
import fs from "fs";

function handler(req, res) {
    const data = fs.readFileSync("src/todos.json", "utf-8");
    res.end(data);
}

const server = http.createServer(handler);

server.listen(3001, function () {
    console.log("Server started at port 3001."); //  http://localhost:3001/
});
*/


/*import http from "http";
import fs from "fs";


function handler(req, res) {
   

if(req.url==="/todos") {
    
if(req.method==="GET")
{
const data = fs.readFileSync("./todos.json", "utf-8");
res.end(data);
} else if(req.method==="POST")
{
    let body ="";
    req.on("data",function(chunk){
        console.log(chunk.toString());
    });

    console.log("Request received");
    res.end("Request received");
}
  }

}

const server = http.createServer(handler);

server.listen(3001, function () {
console.log("Server is running at http://localhost:3001");
}); */

/*import http from "http";

import fs from "fs";
import express from "express";

const app=express(); // handler 
app.use(express.json()); // midlewaere


app.get("/todos",function(req,res){
    const data =fs.readFileSync("src/todos.json","utf-8");
    res.end(data);
});

app.post("/todos",function(req,res){
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    res.end("This is post request!");
});

const server = http.createServer(app);

server.listen(3001,function(){
    console.log("Server started at port 3001.")
});*/

// simple express syntax

import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/todos", function(req, res) {
    const data = fs.readFileSync("src/todos.json", "utf-8");
    res.json(JSON.parse(data)); // not res.end also can use res.send(JSON.parse(data));
});

app.listen(3001, function() {
    console.log("Server Running at Port 3001");
}); 

/*Remember this simple rule:
- res.send() — send a general response, such as text, HTML, or an object.
- res.json() — send a JSON response, especially when building REST APIs.
For your /todos API, res.json(JSON.parse(data)) is a clear and appropriate choice. */
