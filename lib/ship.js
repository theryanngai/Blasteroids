(function() {
	var Ship = Asteroids.Ship = function(pos, game) {
		Ship.RADIUS = 20;
		Ship.COLOR = '#004953';
		var vel = [0, 0];
		var game = game;
		var pos = pos;


		var attributes = {
			color: Ship.COLOR,
			radius: Ship.RADIUS,
			vel: vel,
			pos: pos,
			game: game
		};
	}

	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();