(function(){
	var Asteroids = window.Asteroids = window.Asteroids || {};

	var MovingObject = Asteroids.MovingObject = function(attributes, game) {
		this.pos = attributes.pos
		this.vel = attributes.vel
		this.radius = attributes.radius
		this.color = attributes.color
	};

  MovingObject.prototype.draw = function(ctx) {
	  fillColor = this.color;
	  ctx.fillStyle = fillColor;
	  ctx.beginPath();
	  ctx.moveTo(this.pos[0], this.pos[1]);
	  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
	  ctx.fill();
  };

  MovingObject.prototype.move = function(){
  	this.pos[0] += this.vel[0];
  	this.pos[1] += this.vel[1];
  };
})();