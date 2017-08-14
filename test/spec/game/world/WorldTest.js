define(['game/world/World'], function (World) {

    describe('spec/game/world/World', function () {

        describe('game.world.World', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var options = {
                    'game': game,
                };

                //when 
                var execute = function () {
                    new World(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new World(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.game" should throw exception.', function () {

                //given 
                var options = {
                    'game': undefined,
                    'bounds': {x:0,y:0,width:32,height:24}
                };

                //when 
                var execute = function () {
                    new World(options);
                };

                //then    
                expect(execute).toThrow();
            });

              it('Consturctor without argument "options.bounds" don\'t should throw exception.', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'bounds': undefined
                };

                //when 
                var execute = function () {
                    new World(options);
                };

                //then    
                expect(execute).not.toThrow();
            });
        });
    });
});