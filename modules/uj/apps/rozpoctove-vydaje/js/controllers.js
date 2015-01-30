(function() {

    angular.module('appControllers')

        .controller('RozpoctoveVydajeController', ['$scope', 'AppService', function($scope, AppService) {
            this.update = function() {

                AppService.getData($scope, 'uj', 'rozpoctove-vydaje', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.vydaje = data["@graph"];
                    });
            };

            AppService.init($scope, ['resource'], this.update);
        }]);
})();