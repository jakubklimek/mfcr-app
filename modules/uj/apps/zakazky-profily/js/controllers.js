(function() {

    angular.module('appControllers')

        .controller('ZakazkyProfilyController', ['$scope', 'AppService', function($scope, AppService) {
            $scope.datasource = {
                get: function(offset, limit, callback) {

                    AppService.getData($scope, 'uj', 'zakazky-profily', {'resource': $scope.resource, "limit": limit, "offset": offset})
                        .then(function (data) {
                            callback(data["@graph"]);
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
                return angular.isDefined($scope.zakazky) && $scope.zakazky.length == 0;
            };

            AppService.init($scope, ['resource'], this.update);
        }]);
})();