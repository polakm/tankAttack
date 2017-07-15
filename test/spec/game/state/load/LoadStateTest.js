define(['game/state/play/LoadState'], function (LoadState) {

    describe('spec/game/state/play/LoadStateTest', function () {

        describe('game.state.play.LoadState', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    game: new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
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
                    'game': undefined
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