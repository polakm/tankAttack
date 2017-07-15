define(['game/state/play/PlayState'], function (PlayState) {

    describe('spec/game/state/play/PlayStateTest', function () {

        describe('game.state.play.PlayState', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    game: new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };

                //when 
                var execute = function () {
                    new PlayState(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new PlayState(options);
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
                    new PlayState(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });
    });
});