/* global angular */
(function() {
	"use strict";
    angular.module("myApp").controller("initCtrl", function($scope,$http){
        $scope.home = "Contatos" ;
        $scope.perfil = "Perfil";

        $scope.contatos = [];

        var getData = function(){
        	var params = {
        		counter: $scope.contatos.length,
        		token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
        	};

        	$http({
        		method:"POST",
        		url:"http://localhost/testeApp/api/apiRecupera.php",
        		data:params,
        		headers:{
        			'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        		}

        	}).success(function(data){
        		$scope.contatos = data;
        	}).error(function(data){
        		console.log(data? data: 'Não foi possível acessar o servidor');
        	});
        };

        getData();
    });
})();