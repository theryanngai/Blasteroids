(function() {

	var Game = Asteroids.Game = function() {
		DIM_X = 700;
		DIM_Y = 700;
		NUM_ASTEROIDS = 10;
		this.asteroids = [];
    this.ship = new Asteroids.ship(this.randomPosition(), this);

		this.addAsteroids();
	}

  Game.prototype.allObjects = function() {
    return this.asteroids.push(this.ship);
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
  	this.allObjects().forEach(function(object) {
  		object.draw(ctx);
  	});
  }

  Game.prototype.moveObjects = function() {
  	this.allObjects().forEach(function(object) {
  		object.move();
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
    for(var i = 0; i < this.allObjects().length - 1; i++) {
      for(var j = i + 1; j < this.allObjects().length; j++) {
        if (this.object[i].isCollidedWith(this.object[j])) {
          this.object[i].collideWith(this.object[j]);
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