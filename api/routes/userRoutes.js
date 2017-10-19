'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // todoList Routes
  app.route('/user')
    .get(userController.get_all_users)
    .post(userController.create_a_user);


  app.route('/user/:userId')
   .get(userController.get_user)
   .put(userController.update_user)
   .delete(userController.delete_user);
};
