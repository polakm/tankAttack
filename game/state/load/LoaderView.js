define([], function () {

	var game;
	var LoaderView = function LoaderView(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;
	};

	LoaderView.prototype.constructor = LoaderView;

	LoaderView.prototype.show = function () {

		 game.add.text(100, 200, 'loading assets...', {
			font: '32px Courier',
			fill: '#fff'
		});

	};

	return LoaderView;
});