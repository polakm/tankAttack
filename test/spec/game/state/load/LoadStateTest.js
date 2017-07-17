define(['game/state/load/LoadState'], function (LoadState) {

    describe('spec/game/state/load/LoadStateTest', function () {

        describe('game.state.load.LoadState', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'view': jasmine.createSpyObj('loaderView', ['show']),
                    'loader': jasmine.createSpyObj('assetsLoader', ['load'])
                };

                //when 
                var execute = function () {
                    new LoadState(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new LoadState(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.game" should throw exception.', function () {

                //given 
                var options = {
                    'game': undefined,
                    'view': jasmine.createSpyObj('loaderView', ['show']),
                    'loader': jasmine.createSpyObj('assetsLoader', ['load'])
                };

                //when 
                var execute = function () {
                    new LoadState(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.view" should throw exception.', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'view': undefined,
                    'loader': jasmine.createSpyObj('assetsLoader', ['load'])
                };

                //when 
                var execute = function () {
                    new LoadState(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.loader" should throw exception.', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'view': jasmine.createSpyObj('loaderView', ['show']),
                    'loader': undefined,
                };

                //when 
                var execute = function () {
                    new LoadState(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });
    });
});