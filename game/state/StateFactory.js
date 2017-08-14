define([
	'game/state/load/LoadState',
	'game/state/load/AssetsLoader',
	'game/state/load/LoaderView',
	'game/state/play/PlayState',
	'game/item/ItemFactory',
	'game/item/ItemsProvider',
	'game/world/WorldFactory'

], function (
	LoadState,
	AssetsLoader,
	LoaderView,
	PlayState,
	ItemFactory,
	ItemsProvider,
	WorldFactory
) {

	var game;

	var StateFactory = function StateFactory(options) {

		if (!options || !options.game) {
			throw 'options.game is required parameter';
		};
		game = options.game;
	};

	StateFactory.prototype.constructor = StateFactory;

	var createLoadState = function () {

		var loader = new AssetsLoader({
			'game': game
		});
		var view = new LoaderView({
			'game': game
		});
		var loadState = new LoadState({
			'game': game,
			'loader': loader,
			'view': view
		});
		return loadState;
	};

	var createPlayState = function () {

		var itemFactory = new ItemFactory({
			'game': game
		});

		var	itemsProvider = new ItemsProvider({
			'itemFactory': itemFactory
		});

		var worldFacotry = new WorldFactory({
			'game': game,
			'itemsProvider': itemsProvider
		});

		var playState = new PlayState({
			'game': game,
			'worldFactory': worldFacotry,
		});
		return playState;
	};


	StateFactory.prototype.create = function (key) {

		switch (key) {

			case StateFactory.LOAD_STATE:
				return createLoadState();

			case StateFactory.PLAY_STATE:

				return createPlayState();

			default:
				throw 'key is requried argument';
		}
	};

	StateFactory.LOAD_STATE = 'load';
	StateFactory.PLAY_STATE = 'play';

	return StateFactory;
});