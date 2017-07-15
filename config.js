requirejs.config({
    paths: {
      'game': './game',
      'phaser': './lib/phaser.min'
    },
    shim: {
       'phaser': {
            exports: 'Phaser'
        }
    }
});


requirejs(['game/main'], function(Main){
    
    new Main({
        width:  1024,
        height: 768,
        parent: 'game'
    }).run();
});