(function() {

    angular.module('appControllers')

        .controller('UcetniJednotkaController', ['$scope', 'AppService', function($scope, AppService) {

            this.update = function() {

                AppService.getData($scope, 'uj', 'uj-detail', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.ucetniJednotka = data["@graph"][0];
						geocoder = new google.maps.Geocoder();
						$scope.mapsLoaded = false;
						$scope.marker = [];
						$scope.map = {
							center: {latitude: 49.75, longitude: 15.75}, 
							zoom: 6 ,
							events: {
									tilesloaded: function (map) {
										$scope.$apply(function () {
											if (!$scope.mapsLoaded) {
												geocoder.geocode({ 'address': $scope.ucetniJednotka.adresa }, 
													function (results, status) 
													  {
														if (status == google.maps.GeocoderStatus.OK) {
															var lng = results[0].geometry.location.lng();
															var lat = results[0].geometry.location.lat();
															
															map.setCenter(results[0].geometry.location);
															map.setZoom(12);
															
															var marker = new google.maps.Marker({
																  id: 0,
																  position: results[0].geometry.location,
																  map: map,
																  title: $scope.ucetniJednotka.prefLabel
																});
														}
												});
											$scope.mapsLoaded = true;
											}
										});
									}
						}};
						
						AppService.setTitle("Účetní jednotka " + $scope.ucetniJednotka["prefLabel"]);
                    });
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();