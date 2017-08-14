define([], function () {

	var game;
	var worldFactory
	var world;

	var PlayState = function PlayState(options) {

		if (!options || !options.game) {
			throw 'options.game is required argument';
		}
		game = options.game;

		if (!options || !options.worldFactory) {
			throw 'options.worldFacotry is required argument';
		}
		worldFactory = options.worldFactory;

	};

	PlayState.prototype.constructor = PlayState;

	PlayState.prototype.create = function () {

		var specification = JSON.parse(game.cache.getText('level1'));
		var world = worldFactory.create(specification);
		game.add.existing(world);
	};

	PlayState.prototype.update = function () {

		//for Phaser engine
	};

	PlayState.prototype.render = function () {

		game.debug.text('This is a play state', 10, 20);
	};

	return PlayState;
});