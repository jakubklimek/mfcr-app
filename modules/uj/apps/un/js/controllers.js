(function() {

    angular.module('appControllers')

        .controller('UNController', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://live.payola.cz:29080/api/v1/datacube/custom/49/102c5e79fe8a77b9dca42a5de8d8ebe3?view=chart&chartType=column&isPolar=false&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/ucetniJednotka&valueUri=" + $scope.ucetniJednotka['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();