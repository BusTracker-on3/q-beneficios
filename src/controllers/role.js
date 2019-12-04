module.exports.index = function(application, request, response){
    response.render('register/register_role', {role: []});
}

module.exports.register_role = function(application, request, response){
    var data = request.body;
    var id = request.query.id;
    var errors = request.validationErrors();

    if(errors) {
        response.render('register_role', {validation: errors, formData: formData});
        return;
    }

    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.insertRole(id, data);
    if(id !== null) {
        response.redirect('/roles');
    }
    response.redirect('/');
}

module.exports.list_roles = function(application, request, response) {
    var tag = 'list';
    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.getAll(tag, response);
}

module.exports.update_role = function(application, request, response) {
    var id = request.query.id;
    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.getRoleById(id, response);
}

module.exports.delete_role = function(application, request, response) {
    var id = request.query.id;
    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.removeRole(id, response);
    response.redirect('/roles');
}

module.exports.list_role = function(application, request, response) {
    var roleDAO = new application.src.models.roleDAO(request);
    roleDAO.getByName(request.query.name.toString(), response);
}