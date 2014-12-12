(function() {

	var GameView = Asteroids.GameView = function(game, ctx) {
		this.game = game;
		this.ctx = ctx;
	}

	GameView.prototype.start = function() {
		var that = this;
		setInterval(function() {
			that.game.moveObjects();
			that.game.draw(this.ctx);
		}, 20);
	}

})(); 