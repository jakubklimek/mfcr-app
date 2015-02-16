(function() {

    angular.module('appControllers')

        .controller('UradovnyMainController', ['$scope', 'AppService', function($scope, AppService) {
            this.update = function() {

                AppService.getData($scope, 'uj', 'uradovny', {'resource': $scope.resource})
                    .then(function(data) {
                        $scope.uradovny = data["@graph"][0].hasPOS;
						$scope.ujLabel = data["@graph"][0].prefLabel;

						geocoder = new google.maps.Geocoder();
						$scope.mapLoaded = false;
						$scope.map = {
							events: {
									tilesloaded: function (map) {
										$scope.$apply(function () {
											if (!$scope.mapLoaded) {
												$scope.mapInstance = map;
											
												var i = 0;
												
												var bounds = new google.maps.LatLngBounds();
												$scope.markers = [];
												$scope.uradovny.forEach(function(uradovna) {
													i++;
													geocoder.geocode({ 'address': uradovna.address }, 
														function (results, status) 
														  {
															if (status == google.maps.GeocoderStatus.OK) {
																var lng = results[0].geometry.location.lng();
																var lat = results[0].geometry.location.lat();
																var marker = {
																	  id: i,
																	  coords: {
																		latitude: lat,
																		longitude: lng
																	  },
																	  options: {
																		title: uradovna.address
																	  }
																	};
																$scope.markers.push(marker);
																bounds.extend(results[0].geometry.location);
																map.fitBounds(bounds); // map should be your map class											
															}
														});	
													});
												$scope.mapLoaded = true;
											}
										});
									}
								},
							center: {latitude: 49.75, longitude: 15.75}, 
							zoom: 6 
							};				

						});
            };
			
            $scope.isEmpty = function() {
                return !angular.isDefined($scope.uradovny) || $scope.uradovny.length == 0;
            };
			
            /*$scope.mapDays = function(days) {
				//causes infinite loop
                var mdays = [];
				var daysL = [{cs:"Pondělí", en:"Monday"},{cs:"Úterý", en:"Tuesday"},{cs:"Středa", en:"Wednesday"}, {cs:"Čtvrtek", en:"Thursday"},{cs: "Pátek", en:"Friday"}];
				alert("run");
				for (var i = 0; i < daysL.length; i++)
				{
					for (var j = 0; j < days.length; j++)
					{
						if (days[j].dayOfWeek.search(daysL[i].en) != -1) {
							mdays.push({"day": daysL[i].cs + i, "opens":days[j].opens, "closes":days[j].closes});
						}
					}
					alert("return" + i);
				}
				alert("return whole");
				return mdays;
            };*/

            $scope.mapDay = function(day) {
				var daysL = [{cs:"Pondělí", en:"Monday"},{cs:"Úterý", en:"Tuesday"},{cs:"Středa", en:"Wednesday"}, {cs:"Čtvrtek", en:"Thursday"},{cs: "Pátek", en:"Friday"}];
				for (var i = 0; i < daysL.length; i++)
				{	
					if (daysL[i].en == day) return daysL[i].cs;
				}
				return czday;
            };
			
            AppService.init($scope, ['resource'], this.update);
        }]);
})();