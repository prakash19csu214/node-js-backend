var express = require("express");
const bodyParser = require("body-parser");
const Users = require("../models/users");

const userRouter = express.Router();

const http = require("http");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "GET",
};

const req = http
  .request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("Body:", JSON.parse(data));
      var pdata = JSON.parse(data);
      Users.insertMany(pdata);
    });
  })
  .on("error", (err) => {
    console.log("Error: ", err);
  })
  .end();

userRouter.use(bodyParser.json());

userRouter.route("/").get((req, res, next) => {
  Users.find({})
    .then(
      (user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

userRouter.route("/:id").get((req, res, next) => {
  Users.findById(req.params.id)
    .then(
      (user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
module.exports = userRouter;
