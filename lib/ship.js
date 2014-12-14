(function() {
	var Ship = Asteroids.Ship = function(pos, game) {
		Ship.RADIUS = 20;
		Ship.COLOR = 'lightblue';
		var vel = [0, 0];
		var game = game;
		var pos = pos;
		this.dir = 0;


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
		if (this.vel[0] > 0) {
			newVelX = this.vel[0] * 2 + 3;
		} else if (this.vel[0] < 0) {
			newVelX = this.vel[0] * 2 - 3;
		} else {
			newVelX = 0;
		}

		if (this.vel[1] > 0) {
			newVelY = this.vel[1] * 2 + 3;
		} else if (this.vel[1] < 0) {
			newVelY = this.vel[1] * 2 - 3;
		} else {
			newVelY = -3;
		}
		var newVel = [newVelX, newVelY];
		var newPos = [this.pos[0], this.pos[1]];
		var bullet = new Asteroids.Bullet(newPos, newVel , this.game);
		this.game.add(bullet);
	}

	Ship.prototype.draw = function(ctx, x, y, angle) {
		ctx.save();
		ctx.translate(this.pos[0], this.pos[1]);
		ctx.rotate(20 * Math.PI/180);
		ctx.drawImage(ship, -(ship.width/2), -(ship.height/2));
		ctx.restore();
	}
})();