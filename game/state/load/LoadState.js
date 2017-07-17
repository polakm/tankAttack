define([], function () {

	var game;
	var loader;
	var view;

	var LoadState = function LoadState(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;

		if (!options || !options.loader) {
			throw 'options.loader is required argument';
		}
		loader = options.loader;

		if (!options || !options.view) {
			throw 'options.view is required argument';
		}
		view = options.view;
	};

	LoadState.prototype.constructor = LoadState;

	LoadState.prototype.preload = function () {

		view.show();
		loader.load();
	};

	LoadState.prototype.create = function () {

		this.game.state.start('play');
	};

	return LoadState;
});