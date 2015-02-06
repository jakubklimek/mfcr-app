(function() {

    angular.module('appControllers')

        .controller('RozpoctoveVydajeController', ['$scope', 'AppService', function($scope, AppService) {
            this.update = function() {

                AppService.getData($scope, 'uj', 'rozpoctove-vydaje', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.vydaje = data["@graph"];
                    });
            };
			
            $scope.isEmpty = function() {
                return angular.isDefined($scope.vydaje) && $scope.vydaje.length == 0;
            };

            AppService.init($scope, ['resource'], this.update);
        }]);
})();