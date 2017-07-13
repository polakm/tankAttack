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

require(['jasmine-boot'], function () {
    require([
        'spec/game/MainTest'
    ], function () {
        window.onload();
    })
});