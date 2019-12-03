module.exports = function(application){
    application.get('/register_role', function(request, response){
        application.src.controllers.role.index(application, request, response);
    });

    application.post('/register_role', function(request, response){
        application.src.controllers.role.register_role(application, request, response);
    });
}