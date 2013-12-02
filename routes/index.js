
/*
 * GET home page.
 */

var db = require('../db.js')

exports.index = function(req, res){
  res.render('index', { title: 'Project X' });
};

exports.helloworld = function (req, res) {
    console.log(req);
    res.render('helloworld', { title: 'Hello, world!' });
}

exports.userlist = function (req, res) {
    db.usercollection.find({}, function (error, doc) {
        if (error || !doc) {
            res.json({ 'Some problem': error.toString() });
            console.log('Some problem: ' + error);
        }
        else
            res.render('userlist', { title: 'User List', userlist: doc })
    })
}

exports.newuser = function (req, res) {
    res.render('newuser', { title: 'Add New User' });
}

exports.adduser = function (req, res) {
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    db.usercollection.save({ username: userName, email: userEmail }, function (error, doc) {
        if (error)
            res.send("There was a problem adding to the db: " + error);
        else             
            res.redirect('userList');                   
    })
}
