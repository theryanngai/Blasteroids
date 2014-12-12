(function() {
	var Asteroid = Asteroids.Asteroid = function(pos, game) {
		Asteroid.COLOR = 'tan';
		Asteroid.RADIUS = Asteroids.Util.randomRad(50);
		var vel = Asteroids.Util.randomVec(5);
		var pos = pos;
		var game = game;

		var attributes = {
			color: Asteroid.COLOR,
			radius: Asteroid.RADIUS,
			vel: vel,
			pos: pos,
			game: game
		};

		Asteroids.MovingObject.call(this, attributes, game);
	}

	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();