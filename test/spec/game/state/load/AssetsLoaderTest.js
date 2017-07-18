define(['game/state/load/AssetsLoader'], function (AssetsLoader) {

    describe('spec/game/state/load/AssetsLoaderTest', function () {

        describe('game.state.load.AssetsLoader', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    game: new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox', new Phaser.State())
                };

                //when 
                var execute = function () {
                    new AssetsLoader(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new AssetsLoader(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.game" should throw exception.', function () {

                //given 
                var options = {
                    'game': undefined
                };

                //when 
                var execute = function () {
                    new AssetsLoader(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.state.load.AssetsLoader.load', function () {

            it('Method dont\'t should throw exception.', function () {

                //given
                var assetsLoader = new AssetsLoader({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox', new Phaser.State())
                });

                //when 
                var execute = function () {
                    assetsLoader.load();
                };

                //then    
                expect(execute).not.toThrow();
            });
        });
    });
});