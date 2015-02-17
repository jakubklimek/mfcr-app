(function() {

    angular.module('appControllers')

        .controller('DruhUcetniJednotkyController', ['$scope', 'AppService', function($scope, AppService) {
            $scope.datasource = {
                get: function(offset, limit, callback) {

                    AppService.getData($scope, 'uj', 'druh-uj', {'resource': $scope.resource, "limit": limit, "offset": offset})
                        .then(function (data) {
                            $scope.druh = data["@graph"][0];
							callback(data["@graph"][0].uj);
                        }, function() {
                            callback([]);
                        });
                },
                revision: 0
            };

            this.update = function() {
                $scope.datasource.revision++;
            };
			
            $scope.isEmpty = function() {
                return angular.isDefined($scope.ujs) && $scope.ujs.length == 0;
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();