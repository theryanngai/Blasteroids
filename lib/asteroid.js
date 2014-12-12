(function() {
	var Asteroid = Asteroids.Asteroid = function(pos, game) {
		this.COLOR = 'tan';
		this.RADIUS = Asteroids.Util.randomRad(50);
		this.vec = Asteroids.Util.randomVec(5)
		this.pos = pos;
		this.game = game;

		var attributes = {
			color: this.COLOR,
			radius: this.RADIUS,
			vel: this.vec,
			pos: this.pos,
			game: this.game
		};

		Asteroids.MovingObject.call(this, attributes);
	}

	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();