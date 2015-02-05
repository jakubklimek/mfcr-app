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

            AppService.init($scope, ['resource'], this.update);
        }]);
})();