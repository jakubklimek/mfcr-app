(function() {

    angular.module('appControllers')

        .controller('U04Controller', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://demo.visualization.linkedpipes.com/api/v1/datacube/custom/210/21c1627f69b4956467936459f98c902a?view=chart&chartType=column&isPolar=false&disableTitle=true&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/refArea&valueUri=" + $scope.ucetniJednotka.okres[0]['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();