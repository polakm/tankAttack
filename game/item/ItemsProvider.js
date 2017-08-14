define([], function () {

	var itemFactory;

	var ItemsProvider = function ItemsProvider(options) {

		if (!options || !options.itemFactory) {
			throw 'options.itemFactory is required parameter';
		};
		itemFactory = options.itemFactory;
	};

	ItemsProvider.prototype.constructor = ItemsProvider;

	ItemsProvider.prototype.provideItems = function (specification) {

		var items = [];
		Object.keys(specification).forEach(function (key) {

			var itemSpecification = specification[key];
			if (itemSpecification.length) {

				var group = provideItemsGroup(itemSpecification);
				items.push(group);
			} else {

				var item = provideItem(key, itemSpecification);
				items.push(item);
			}
		}, this);

		return items;
	};

	var provideItemsGroup = function (itemsGroupSpecification) {

		var group = game.add.group();
		itemsGroupSpecification[key].forEach(function (itemSpecification) {
			var item = provideItem(key, itemSpecification);
			group.add(item);
		}, group);

		return group;
	};

	var provideItem = function (key, itemSpecification) {

		return itemFactory.create(key, itemSpecification);
	};


	return ItemsProvider;
});