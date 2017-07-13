define(['phaser'], function (Phaser) {

    var DEFAULT_WIDTH = 800;
    var DEFAULT_HEIGHT = 600;
    var DEFAULT_PARENT= 'game';
    var Main = function Main(option) {

        var width = option && option.width || DEFAULT_WIDTH;
        var height = option && option.height || DEFAULT_HEIGHT;
        var renderer = option && option.renderer || Phaser.AUTO;
        var parent = option && option.parent || DEFAULT_PARENT;

        this.game = new Phaser.Game(width, height, renderer, parent);
    }

    return Main;
});