(function() {

	var Game = Asteroids.Game = function() {
		DIM_X = 700;
		DIM_Y = 700;
		NUM_ASTEROIDS = 10;
		this.asteroids = [];


		this.addAsteroids();
	}

	Game.prototype.addAsteroids = function() {
		while (this.asteroids.length < NUM_ASTEROIDS) {
			this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
		}
	}


  Game.prototype.randomPosition = function(){
    xPos = Math.floor((Math.random() * DIM_X) + 1);
    yPos = Math.floor((Math.random() * DIM_Y) + 1);
    return [xPos, yPos];
  }  

  Game.prototype.draw = function(ctx) {
  	ctx.clearRect(0, 0, DIM_X, DIM_Y);
  	this.asteroids.forEach(function(asteroid) {
  		asteroid.draw(ctx);
  	});
  }

  Game.prototype.moveObjects = function() {
  	this.asteroids.forEach(function(asteroid) {
  		asteroid.move();
  	})
  }

})();