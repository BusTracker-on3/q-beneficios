module.exports.index = function(application, request, response){
    var DAO = new application.src.models.roleDAO(request);
    DAO.getAll(response);
}