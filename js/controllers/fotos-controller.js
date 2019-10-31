angular.module('AluraPic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    $http.get("v1/fotos")
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(error){
        console.log("Erro ocorrido:  " , error);
    });

    $scope.remover = function(foto){ //Remove a foto ao clicar no botão de REMOVER
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1); // Responsável por deletar a foto do escopo, sem a necessidade de ralizar nova requisição get
            $scope.mensagem = "Foto Removida!";
        })
        .error(function(erro){
            $scope.mensagem = "Foto não Removida!";
        });
    };

   /* //O HTTP EM SI FUNCIONA COMO UMA PROMESSA, EXEMPLO \/

        $http.get("v1/fotos");
        promise.then(function(retorno){
            $scope.fotos = retorno.data;
        }).catch(function(error){
            console.log(error);
        }); 

    */


});