require.config({
    paths: {
        'jasmine': 'lib/jasmine-2.6.4/jasmine',
        'jasmine-html': 'lib/jasmine-2.6.4/jasmine-html',
        'jasmine-boot': 'lib/jasmine-2.6.4/boot',
        'phaser': '/lib/phaser.min',
        'spac': 'spec',
        'game': '/game'
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        },
        'phaser': {
            exports: 'Phaser'
        }
    }
});

var clenUp = function () {
   
   setTimeout(function () {
        
        var node = document.getElementById('sandbox');
        while (node && node.hasChildNodes()) {
            
            console.log('clean sandbox child: ' + node.firstChild.nodeName );
            node.removeChild(node.firstChild);
        }
    }, 1);
};

require(['jasmine-boot'], function () {
    require([
        'spec/game/MainTest',
        'spec/game/state/StateFactoryTest',
        'spec/game/state/StateInitializerTest',
        'spec/game/state/load/LoadState',
        'spec/game/state/load/PlayState',
    ], function () {
      
        window.onload();
        afterEach(clenUp);
    });
});