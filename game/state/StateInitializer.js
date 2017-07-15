define([
	'game/state/load/LoadState',
	'game/state/play/PlayState'
], function (
	LoadState,
	PlayState
) {

	var game;

	var StateInitializer = function StateInitializer(options) {

		if (!options || !options.game) {
			throw 'options.game is required parameter';
		};
		game = options.game
	};

	StateInitializer.prototype.constructor = StateInitializer;

	StateInitializer.prototype.registerStates = function (states) {

		Object.keys(states).forEach(function (key) {
			game.state.add(key, states[key]);
		});
	};

	StateInitializer.prototype.startState = function (startState) {

		game.state.start(startState);
	};

	return StateInitializer;
});