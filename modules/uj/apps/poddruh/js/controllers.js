(function() {

    angular.module('appControllers')

        .controller('PoddruhUcetniJednotkyController', ['$scope', 'AppService', function($scope, AppService) {
            $scope.datasource = {
                get: function(offset, limit, callback) {

                    AppService.getData($scope, 'uj', 'poddruh-uj', {'resource': $scope.resource, "limit": limit, "offset": offset})
                        .then(function (data) {
                            $scope.poddruh = data["@graph"][0];
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