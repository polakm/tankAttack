require.config({
    paths: {
        'jasmine': 'lib/jasmine-2.6.4/jasmine',
        'jasmine-html': 'lib/jasmine-2.6.4/jasmine-html',
        'jasmine-boot': 'lib/jasmine-2.6.4/boot',
        'phaser': '/lib/phaser.min',
        'spac': 'spec',
        'utils': 'utils',
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
        'utils/task/CleanUpSandbox',
        'spec/game/MainTest',
        'spec/game/state/StateFactoryTest',
        'spec/game/state/StateInitializerTest',
        'spec/game/state/load/LoadStateTest',
        'spec/game/state/load/LoaderViewTest',
        'spec/game/state/load/AssetsLoaderTest',
        'spec/game/state/play/PlayStateTest',
    ], function (CleanUpSandbox) {

        window.onload();
        afterEach(function () {
            new CleanUpSandbox().execute();
        });

    });
});