(function(){
	"use scrcts";

	angular.module("myApp").value("Config",{
		getUrl: "http://localhost/testeApp/"
	});

	angular.module("myApp").service('Data', function($http, Config){
		this.getData = function(params){
			return $http({
        		method:"POST",
        		url: Config.getUrl + "api/apiRecupera.php",
        		data:params,
        		headers:{
        			'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        		}

        	})
		}
	});
	
})();