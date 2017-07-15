define([
	'game/state/load/LoadState',
	'game/state/play/PlayState'
], function (
	LoadState,
	PlayState
) {

	var game;

	var StateFactory = function StateFactory(options) {

		if (!options || !options.game) {
			throw 'options.game is required parameter';
		};
		game = options.game;
	};

	StateFactory.prototype.constructor = StateFactory;

	StateFactory.prototype.create = function (key) {

		switch (key) {

			case StateFactory.LOAD_STATE:

				return new LoadState({
					'game': game
				});
			case StateFactory.PLAY_STATE:

				return new PlayState({
					'game': game
				});
			default:

				throw 'key is requried argument';
		}
	};

	StateFactory.LOAD_STATE = 'load';
	StateFactory.PLAY_STATE = 'play';

	return StateFactory;
});