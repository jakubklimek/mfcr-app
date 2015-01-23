(function() {

    angular.module('appControllers')

        .controller('UcetniJednotkaController', ['$scope', 'AppService', function($scope, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
                        AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };

            AppService.init($scope, ['resource'], this.update);
        }]);
})();