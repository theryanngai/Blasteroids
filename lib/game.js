(function() {

	var Game = Asteroids.Game = function() {
		DIM_X = 700;
		DIM_Y = 700;
		NUM_ASTEROIDS = 10;
		this.asteroids = [];
    this.ship = new Asteroids.ship()

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

  Game.prototype.wrap = function(pos) {
  	if (pos[0] > DIM_X ) {
  		pos[0] = pos[0] % DIM_X;
  	}
  	if (pos[1] > DIM_Y) {
  		pos[1] = pos[1] % DIM_Y;
  	}
  }

  Game.prototype.checkCollisions = function() {
    for(var i = 0; i < this.asteroids.length - 1; i++) {
      for(var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  }
})();