define([], function () {

	var game;

	var PlayState = function PlayState(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;
	};

	PlayState.prototype.constructor = PlayState;

	PlayState.prototype.render = function () {

		game.debug.text('This is a play state', 100, 100);
	};

	return PlayState;
});