(function() {

    angular.module('appControllers')

        .controller('U11Controller', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://demo.visualization.linkedpipes.com/api/v1/datacube/custom/208/71f789c22fc6d06e742307e03507ec5f?view=chart&chartType=column&isPolar=false&disableTitle=true&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/refArea&valueUri=" + $scope.ucetniJednotka.okres[0]['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();