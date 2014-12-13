(function() {

	var Game = Asteroids.Game = function() {
		DIM_X = 700;
		DIM_Y = 700;
		NUM_ASTEROIDS = 10;
		this.asteroids = [];
    this.bullets = [];
    this.ship = new Asteroids.Ship(this.randomPosition(), this);

		this.addAsteroids();
	}

  Game.prototype.allObjects = function() {
    var everything = this.asteroids.slice();
    everything.push(this.ship);
    return everything.concat(this.bullets);
  }

	Game.prototype.addAsteroids = function() {
		while (this.asteroids.length < NUM_ASTEROIDS) {
			this.add(new Asteroids.Asteroid(this.randomPosition(), this));
		}
	}

  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var index = this.asteroids.indexOf(obj);
      this.asteroids.splice(index, 1);
    } else if (obj instanceof Asteroids.Bullet) {
      var index = this.bullets.indexOf(obj);
      this.bullets.splice(index, 1);
    }
  }

  Game.prototype.randomPosition = function(){
    xPos = Math.floor((Math.random() * DIM_X) + 1);
    yPos = Math.floor((Math.random() * DIM_Y) + 1);
    return [xPos, yPos];
  }  

  Game.prototype.draw = function(ctx) {
  	ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.drawImage(img, 0, 0);
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
  	if (pos[0] > DIM_X) {
  		pos[0] = pos[0] % DIM_X;
  	}

    if(pos[0] < 0) {
      pos[0] += DIM_X;
    }

  	if (pos[1] > DIM_Y) {
  		pos[1] = pos[1] % DIM_Y;
  	}

    if (pos[1] < 0) {
      pos[1] += DIM_Y;
    }
  }

  Game.prototype.checkCollisions = function() {
    var everything = this.allObjects();
    for(var i = 0; i < everything.length - 1; i++) {
      for(var j = i + 1; j < everything.length; j++) {
        if (everything[i].isCollidedWith(everything[j])) {
          everything[i].collideWith(everything[j]);
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] > DIM_X || pos[0] < 0) {
      return true;
    }
    if (pos[1] > DIM_Y || pos[1] < 0) {
      return true;
    }
  }
})();