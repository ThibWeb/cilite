var five = require("johnny-five");

var colors = Lite.colors = {
	green: 'green rbg',
	yellow: 'yellow rgb',
	red: 'red rgb'
};

var _color;
/**
 * Constructs a traffic light
 * @param {[type]} options
 */
function Lite(options){
	if(!(this instanceof Lite)) {
		return new Lite(options);
	}

	var options = options || {};

	Object.defineProperty(this, "color", {
			get: function(){
				return _color;
			},
			set: function(value){
				_color = value;
			// set led with colors[value];
			}
	});
}

// add red(), yellow(), green() methods.
Object.keys(colors).forEach(function(key){
	Lite.prototype[key] = function(){
		return this.color = key;
	}
});
Lite.prototype.off = function(){

};
Lite.prototype.turn = function(color){
	if(!colors.hasOwnProperty(color)) throw new Error('No color with the key of ' + color);
	this[color]();
};


module.exports = Lite;