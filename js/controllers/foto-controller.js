angular.module('AluraPic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = "";

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            console.log(foto)
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);       
        });
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){ // Condição se vai alterar ou se vai criar
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = "Foto alterada com suceso!";
                })
                .error(function(error){
                    $scope.mensagem = "Foto NÃO alterada!";
                });
            }
            else{
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.mensagem = "Foto cadastrada!";
                    $scope.foto = {};
                })
                .error(function(error){
                    $scope.mensagem = "Foto NÃO cadastrada!";
                });
            }
        }
    };
    
});