angular.module('AluraPic', ['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true); //Responsável por 'Não precisar do # na rota'.

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos'}); // Responsável por redirecionar para '/fotos' caso não exista a rota digitada.

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html'
    });

});
