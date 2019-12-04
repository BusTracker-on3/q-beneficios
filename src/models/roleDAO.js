const {ObjectId} = require('mongodb');

class RoleDAO {
    constructor(request) {
        this._request = request;
    }
}

RoleDAO.prototype.insertRole = function(id, role) {
    this._request.db.collection("roles", function(error, collection) {
        collection.update({'_id': ObjectId(id)}, role, {upsert: true});
    });
}

RoleDAO.prototype.getAll = function(tag, response){
    this._request.db.collection("roles", function(error, collection){
        collection.find({}).toArray(function(erro, result) {
            var destiny_page = 'home/index';
            if(tag === "list") {
                destiny_page = 'lists/list_roles';
            }
            response.render(destiny_page, {vector_roles: result});
        });
    });
}

/*RoleDAO.prototype.getAll2 = function(response) {
    this._request.db.collection("roles", function(error, collection) {
        collection.find({}).toArray(function(erro, result) {
            response.render('lists/list_roles', {vector_roles: result});
        });
    });
}*/

RoleDAO.prototype.getRoleById = function(id, response) {
    this._request.db.collection("roles", function(error, collection) {
        collection.find({'_id': ObjectId(id)}).toArray(function(err, result) {
            response.render('register/register_role', {validation: id, role: result});
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

RoleDAO.prototype.removeRole = function(id, response) {
    this._request.db.collection("roles", function(error, collection) {
        collection.remove({'_id': ObjectId(id)});
    //    response.redirect('/roles');
    });
}

module.exports = function(){
    return RoleDAO;
}