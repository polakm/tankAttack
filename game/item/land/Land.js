define(["phaser"], function (Phaser) {

    Land = function (options) {

        Phaser.TileSprite.call(this, options.game, options.x, options.y, options.width, options.height, options.key, options.frame);
        this.fixedToCamera = true;
    };
    Land.prototype = Object.create(Phaser.TileSprite.prototype);

    Land.prototype.constructor = Land;

    Land.prototype.update = function () {
        
        this.tilePosition.x = -this.game.camera.x;
        this.tilePosition.y = -this.game.camera.y;
    };

    return Land;
});