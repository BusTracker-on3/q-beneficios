const {ObjectId} = require('mongodb');

class RoleDAO {
    constructor(request) {
        this._request = request;
    }
}

RoleDAO.prototype.insertRole = function(role){
    this._request.db.collection("roles", function(error, collection){
        collection.insert(role);
    });
}

RoleDAO.prototype.getAll = function(response){
    this._request.db.collection("roles", function(error, collection){
        collection.find({}).toArray(function(erro, result){
            response.render('home/index', {vector_roles: result});
        });
    });
}

RoleDAO.prototype.getAll2 = function(response) {
    this._request.db.collection("roles", function(error, collection) {
        collection.find({}).toArray(function(erro, result) {
            response.render('lists/list_roles', {vector_roles: result});
        });
    });
}

RoleDAO.prototype.getByName = function(name, response) {
    this._request.db.collection("roles", function(error, collection) {
        collection.find({"name":name}).toArray(function(erro, result) {
            response.render('lists/list_role', {role: result});
        });
    });
}

module.exports = function(){
    return RoleDAO;
}