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

module.exports = function(){
    return RoleDAO;
}