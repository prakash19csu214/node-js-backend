var express = require('express');
const bodyParser = require("body-parser");
const Todos = require("../models/todos");

const todoRouter = express.Router();

todoRouter.use(bodyParser.json());

const http = require('http');
  
// Setting the configuration for
// the request
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/todos',
    method: 'GET'
};

const req = http.request(options, (res) => {
  let data = ''
   
  res.on('data', (chunk) => {
      data += chunk;
    });
  // Ending the response 
  res.on('end', () => {
      console.log('Body:', JSON.parse(data))
      var jdata = JSON.parse(data)
      Todos.insertMany(jdata)
  });
     
}).on("error", (err) => {
  console.log("Error: ", err)
}).end()

todoRouter
  .route("/")
  .get((req, res, next) => {
    Todos.find({})
      .then(
        (todo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(todo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
  
module.exports = todoRouter;