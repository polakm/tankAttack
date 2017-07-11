requirejs.config({
    "paths": {
      "game": "./game",
      'phaser': './lib/phaser.min'
    },
    "shim": {
       phaser: {
            exports: 'Phaser'
        }
    }
});

requirejs(["game/main"]);