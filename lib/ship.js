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

		Asteroids.MovingObject.call(this, attributes, game);
	}

	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

	Ship.prototype.relocate = function() {
		this.pos = this.game.randomPosition();
		this.vel = [0, 0];
	}

	Ship.prototype.power = function(impulse) {
		this.vel[0] += impulse[0];
		this.vel[1] += impulse[1];
	}

	Ship.prototype.fireBullet = function() {
		var newVel = [this.vel[0] * 2, this.vel[1] * 2];
		var newPos = [this.pos[0], this.pos[1]];
		var bullet = new Asteroids.Bullet(newPos, newVel , this.game);
		this.game.add(bullet);
	}
})();