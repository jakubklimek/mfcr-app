(function() {

    angular.module('appControllers')

        .controller('UcetniJednotkaController', ['$scope', 'AppService', function($scope, AppService, uiGmapGoogleMapApi) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						
						geocoder = new google.maps.Geocoder();
						geocoder.geocode({ 'address': $scope.ucetniJednotka.adresa }, 
							function (results, status) 
							  {
								if (status == google.maps.GeocoderStatus.OK) {
									var lng = results[0].geometry.location.lng();
									var lat = results[0].geometry.location.lat();
									$scope.map = { center: {latitude: lat, longitude: lng}, zoom: 12 };
									$scope.marker = {
										  id: 0,
										  coords: {
											latitude: lat,
											longitude: lng
										  }
										};
								}
							});
						
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();