module.exports.index = function(application, request, response){
    response.render('register/register_role');
}

module.exports.register_role = function(application, request, response){
    var data = request.body;

    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.insertRole(data);
    response.redirect('/');
}

module.exports.list_roles = function(application, request, response) {
    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.getAll2(response);
}