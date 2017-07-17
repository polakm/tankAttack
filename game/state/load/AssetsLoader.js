define([], function () {

	var game;

	var AssetsLoader = function AssetsLoader(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;
	}
	AssetsLoader.prototype.constructor = AssetsLoader;

	AssetsLoader.prototype.load = function () {
		
		game.load.image('earth', 'game/assets/ground_earth.png');
	};

	return AssetsLoader;
});