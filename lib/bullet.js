(function() {
	var Bullet = Asteroids.Bullet = function(pos, vel, game) {
		Bullet.RADIUS = 4;
		Bullet.COLOR = 'gray';
		var vel = vel;
		var game = game;
		var pos = pos;


		var attributes = {
			color: Bullet.COLOR,
			radius: Bullet.RADIUS,
			vel: vel,
			pos: pos,
			game: game
		};

		Asteroids.MovingObject.call(this, attributes, game);
	}

	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

	Bullet.prototype.collideWith = function(otherObject) {
		if (otherObject instanceof Asteroids.Asteroid) {
			this.game.remove(otherObject);
			this.game.remove(this);
		}
	}
})();