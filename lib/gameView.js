(function() {

	var GameView = Asteroids.GameView = function(game, ctx) {
		this.game = game;
		this.ship = this.game.ship;
		this.ctx = ctx;
	}

	GameView.prototype.start = function() {
		this.bindKeyHandlers();
		var that = this;
		setInterval(function() {
			that.game.step();
			that.game.draw(this.ctx);
		}, 20);
	}

	GameView.prototype.bindKeyHandlers = function() {
		var that = this;
		
		key('up', function() {
			that.ship.power([0, -0.75]);
		});
		key('down', function() {
			that.ship.power([0, 0.75]);
		});
		key('left', function() {
			that.ship.turn("left");
		});
		key('right', function() {
			that.ship.turn("right");
		});
		key('space', function() {
			that.ship.fireBullet();
		});
	}

})(); 