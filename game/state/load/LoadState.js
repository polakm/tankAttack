define([], function () {

	var game;

	var LoadState = function LoadState(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;
	};

	LoadState.prototype.constructor = LoadState;

	LoadState.prototype.preload = function () {

		this.game.debug.text('This is a load state', 100, 100);
	};

	LoadState.prototype.create = function () {

		this.game.state.start('play');
	};

	return LoadState;
});