define(['game/state/load/LoaderView'], function (LoaderView) {

    describe('spec/game/state/load/LoaderViewTest', function () {

        describe('game.state.load.LoaderView', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    game: new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox', new Phaser.State())
                };

                //when 
                var execute = function () {
                    new LoaderView(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new LoaderView(options);
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
                    new LoaderView(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.state.load.LoaderView.show', function () {

            it('Method dont\'t should throw exception.', function () {

                //given
                var loaderView = new LoaderView({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox', new Phaser.State())
                });

                //when 
                var execute = function () {
                    loaderView.show();
                };

                //then    
                expect(execute).not.toThrow();
            });
        });
    });
});