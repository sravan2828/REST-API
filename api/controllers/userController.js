'use strict';


var mongoose = require('mongoose'),
  userDB = mongoose.model('user');

exports.get_all_users = function(req, res) {
  userDB.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new userDB(req.body);
  new_user.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_user = function(req, res) {
  userDB.findById(req.params.userId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_user = function(req, res) {
  userDB.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_user = function(req, res) {
  userDB.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
