(function() {

    angular.module('appControllers')

        .controller('UcetniJednotkaController', ['$scope', '$sce', 'AppService', function($scope, $sce, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						$scope.vizuri = $sce.trustAsResourceUrl("http://live.payola.cz:29080/api/v1/datacube/custom/51/bb1220bac6d6dee04f0dc9ae47d11101?view=chart&chartType=column&isPolar=false&dimensionUri=http://linked.opendata.cz/ontology/application/mfcrapp/rozpocty/refArea&valueUri=" + $scope.ucetniJednotka.okres[0]['@id']);
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();