(function() {

    angular.module('appControllers')

        .controller('U02Controller', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://live.payola.cz:29080/api/v1/datacube/custom/49/b74f5d8523c719142666b29348256c8e?view=chart&chartType=column&isPolar=false&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/ucetniJednotka&valueUri=" + $scope.ucetniJednotka['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();