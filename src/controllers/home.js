module.exports.index = function(application, request, response){
    var tag = 'home';
    var DAO = new application.src.models.roleDAO(request);
    DAO.getAll(tag, response);
}