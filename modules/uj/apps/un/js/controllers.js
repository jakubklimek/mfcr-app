(function() {

    angular.module('appControllers')

        .controller('UNController', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://demo.visualization.linkedpipes.com/api/v1/datacube/custom/209/b0ee6653ec8ccb33914b522ee9717223?view=chart&chartType=column&isPolar=false&disableTitle=true&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/ucetniJednotka&valueUri=" + $scope.ucetniJednotka['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();