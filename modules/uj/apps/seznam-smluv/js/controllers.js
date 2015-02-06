(function() {

    angular.module('appControllers')

        .controller('SeznamSmluvController', ['$scope', 'AppService', function($scope, AppService) {
            $scope.datasource = {
                get: function(offset, limit, callback) {

                    AppService.getData($scope, 'uj', 'seznam-smluv', {'resource': $scope.resource, "limit": limit, "offset": offset})
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
                return angular.isDefined($scope.smlouvy) && $scope.smlouvy.length == 0;
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();