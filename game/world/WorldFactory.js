define(['game/world/World'], function (World) {

	var game;
	var itemsProvider;

	var WorldFactory = function WorldFactory(options) {

		if (!options || !options.game) {
			throw 'options.game is required parameter';
		};
		game = options.game;

		if (!options || !options.itemsProvider) {
			throw 'options.itemsProvider is required parameter';
		};
		itemsProvider = options.itemsProvider;
	};

	WorldFactory.prototype.constructor = WorldFactory;

	WorldFactory.prototype.create = function (specification) {

		if (!specification) {
			throw 'specification is required argument';
		};
		
		//THINK ABOUT IT ??
		if (!specification.world) {
			throw 'specification.world is required argument';
		};

		if (!specification.items) {
			throw 'specification.world is required argument';
		};

		var options = prepareOptionsForWorld(specification.world)
		var world = new World(options);
		var items = itemsProvider.provideItems(specification.items);
		world.addMultiple(items);
		
		return world;
	};

	var prepareOptionsForWorld = function(worldSpecification){
		
		var options = worldSpecification;
		options.game = game;
		return options;
	}

return WorldFactory;
});