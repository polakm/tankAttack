define(['phaser'], function (Phaser) {

    Player = function (options) {
       
        Phaser.Sprite.call(this, options.game, options.x, options.y, options.key, options.frame);
    };

    Player.prototype = Object.create(Phaser.Sprite.prototype);

    Player.prototype.constructor = Player;

    return Player;
});