var db = require('mongojs').connect('localhost:27017/ProjectX', ['usercollection'])

module.exports = db;