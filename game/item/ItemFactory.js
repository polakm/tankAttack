define([
	'game/item/land/Land',
	'game/item/player/Player'
], function (
	Land,
	Player
) {

	var game;

	var ItemFactory = function ItemFactory(options) {

		if (!options || !options.game) {
			throw 'options.game is required parameter';
		};
		game = options.game;
	};

	ItemFactory.prototype.constructor = ItemFactory;

	ItemFactory.prototype.create = function (key, specyfication) {

		switch (key) {
			case "land":

				return new Land({
					game: game,
					x: 0,
					y: 0,
					height: game.world.height,
					width: game.world.width,
					key: 'earth'
				});

			case "player":

				return new Player({
					game: game,
					x: 0,
					y: 0,
					angle: 0,
					key: 'tank',
					frame: 'tank1'
				});

			default:
				throw 'key is requried argument';
		}
	};

	return ItemFactory;
});