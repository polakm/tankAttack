define(['phaser'], function (Phaser) {

    World = function (options) {

        if (!options || !options.game) {
            throw 'options.game is required parameter';
        };

        Phaser.World.call(this, options.game);
        this.bounds = options.bounds;
    };
    
    World.prototype = Object.create(Phaser.World.prototype);

    World.prototype.constructor = World;

    return World;
});