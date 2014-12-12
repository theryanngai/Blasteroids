(function() {

	var Util = Asteroids.Util = Asteroids.Util || {};

	Util.inherits = function(subClass, superClass) {
		function Surrogate() {};
		Surrogate.prototype = superClass.prototype;
		subClass.prototype = new Surrogate();
	};

	Util.randomVec = function(length) {
    xVec = 0.5 + Math.floor(((Math.random() * 2) - 1) * (Math.random() * length) + 1);
    yVec = 0.5 + Math.floor(((Math.random() * 2) - 1) * (Math.random() * length) + 1);
    return [xVec, yVec];
  };

  Util.randomRad = function(maxSize) {
    size = Math.floor(Math.random() * maxSize + 7);
    return size;
  };

})();