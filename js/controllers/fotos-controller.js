angular.module('AluraPic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = "";

    $http.get("v1/fotos")
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(error){
        console.log("Erro ocorrido:  " , error);
    });

   /* //O HTTP EM SI FUNCIONA COMO UMA PROMESSA, EXEMPLO \/

        $http.get("v1/fotos");
        promise.then(function(retorno){
            $scope.fotos = retorno.data;
        }).catch(function(error){
            console.log(error);
        }); 

    */


});