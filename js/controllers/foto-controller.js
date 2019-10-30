angular.module('AluraPic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
            .success(function(){
                $scope.mensagem = "Foto cadastrada!";
                $scope.foto = {};
            })
            .error(function(error){
                $scope.mensagem = "Foto NÃO cadastrada!";
            });
        }
    };
    
});