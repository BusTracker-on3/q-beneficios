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

module.exports = function(){
    return RoleDAO;
}