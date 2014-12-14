(function() {
	var Asteroid = Asteroids.Asteroid = function(pos, game) {
		Asteroid.COLOR = 'gray';
		Asteroid.RADIUS = Asteroids.Util.randomRad(50);
		var dir = Asteroids.Util.randomDir();
		var spd = Asteroids.Util.randomSpd(10);
		var pos = pos;
		var game = game;

		var attributes = {
			color: Asteroid.COLOR,
			radius: Asteroid.RADIUS,
			dir: dir,
			spd: spd,
			pos: pos,
			game: game
		};

		Asteroids.MovingObject.call(this, attributes, game);
	}

	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

	Asteroid.prototype.collideWith = function(otherObject) {
		if (otherObject instanceof Asteroids.Ship) {
			otherObject.relocate();
		} 
		if (otherObject instanceof Asteroids.Bullet) {
			otherObject.collideWith(this);
		}
	}
})();