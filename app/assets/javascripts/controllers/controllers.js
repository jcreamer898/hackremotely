angular.module('hack.controllers', [])
	.controller('AppCtrl', function(Search) {
		var self = this;

		this.welcome = "Hello World";

		window.navigator.geolocation.getCurrentPosition(function(pos) {
			self.position = pos;
		});

		this.send = function() {
			Search.query(self.position.coords.latitude, self.position.coords.longitude, self.search).success(function(data) {
				self.venues = data.venues;
			});
		};
	});