var express = require("express");
const bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://subhash:subhash@mongo-lhwt2.mongodb.net/test?retryWrites=true&w=majority";
const Joi = require("joi"); // Install It
var app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", function(req, res) {
  res.send("Hello");
});

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbase = db.db("flobiz");
    console.log("DataBase connected");
    //var myobj = { name: "Subhash", rollno: "19", address: "lpu" };
    // dbase.collection("users").insertOne(myobj, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 row inserted");
    //   db.close();
    //   //res.send("inserted success");
    // });
  }
);
require("./routes/Posts.routes.js")(app);
require("./routes/Comments.routes.js")(app);
require("./routes/User.routes.js")(app);
app.listen(9000, (res, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Port Running");
  }
});
