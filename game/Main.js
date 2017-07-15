define([
    'phaser',
    'game/state/StateInitializer',
    'game/state/StateFactory'
], function (
    Phaser,
    StateInitializer,
    StateFactory) {

    var DEFAULT_WIDTH = 800;
    var DEFAULT_HEIGHT = 600;
    var DEFAULT_PARENT = 'game';

    var game;
    var stateInitializer;
    var stateFactory;

    var Main = function Main(options) {

        var width = options && options.width || DEFAULT_WIDTH;
        var height = options && options.height || DEFAULT_HEIGHT;
        var renderer = options && options.renderer || Phaser.AUTO;
        var parent = options && options.parent || DEFAULT_PARENT;
        game = new Phaser.Game(width, height, renderer, parent);
        stateFactory = options && options.stateFactory || new StateFactory({
            'game': game
        });
        stateInitializer = options && options.stateInitializer || new StateInitializer({
            'game': game
        });
    };

    Main.prototype.constructor = Main;

    Main.prototype.run = function () {

        stateInitializer.registerStates({
            'load': stateFactory.create(StateFactory.LOAD_STATE),
            'play': stateFactory.create(StateFactory.PLAY_STATE)
        });

        stateInitializer.startState('load');
    };

    return Main;
});