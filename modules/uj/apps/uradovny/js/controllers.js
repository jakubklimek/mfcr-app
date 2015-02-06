(function() {

    angular.module('appControllers')

        .controller('UradovnyController', ['$scope', 'AppService', function($scope, AppService) {
            this.update = function() {

                AppService.getData($scope, 'uj', 'uradovny', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.uradovny = data["@graph"][0].hasPOS;
                    });
            };
			
			$scope.isEmpty = function() {
                return $scope.uradovny.length == 0;
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();