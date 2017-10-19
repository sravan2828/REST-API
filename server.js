var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;



  mongoose = require('mongoose'),
    Task = require('./api/models/userModel'), //created model loading here
    bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://192.168.0.107:27017/hackDB');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/userRoutes'); //importing route
  routes(app); //register the route

  app.listen(port,()=>{
    console.log('todo list RESTful API server started on: ' + port);
  });
