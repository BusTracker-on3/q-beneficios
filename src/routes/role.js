module.exports = function(application){
    application.get('/register_role', function(request, response){
        application.src.controllers.role.index(application, request, response);
    });

    application.post('/register_role', function(request, response){
        application.src.controllers.role.register_role(application, request, response);
    });

    application.get('/roles', function(request, response) {
        application.src.controllers.role.list_roles(application, request, response);
    });

    application.get('/update_role', function(request, response) {
        application.src.controllers.role.update_role(application, request, response);
    });

    application.get('/delete_role', function(request, response) {
        application.src.controllers.role.delete_role(application, request, response);
    });
    
    application.get('/role', function(request, response) {
        application.src.controllers.role.list_role(application, request, response);
    });
}