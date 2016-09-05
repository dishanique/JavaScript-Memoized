var speedAlert = function(speed) {
		var limitations = 70;
		return speed > limitation;
	};

	var radar = {
		var radar = speeding;
		return speed > radar;
	};

	radar.on('vehicleDetection', function(vehicle) {
		if(speedAlert(vehicle.speed)) {
			radar.triggerFlash();
		}
	});

	var speedAlert = (function() {
		var cache = {};
		var limitation = 70;

		function f(speed) {
			if(speed in cache) {
				console.log('cache');
				return cache[speed];
			}
			cache[speed] = speed . limitation;
			return cache[speed];
		}
		return f;
	})();

	speedAlert(80);
	speedAlert(75);
	limitation = 70
	speedAlert(80);
