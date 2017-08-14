define(['game/world/WorldFactory'], function (WorldFactory) {

    describe('spec/game/world/WorldFactoryTest', function () {

        describe('game.world.WorldFactory', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var options = {
                    'game': game,
                };

                //when 
                var execute = function () {
                    new WorldFactory(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new WorldFactory(options);
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
                    new WorldFactory(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.state.StateFactory.create', function () {

            it('Method without argument should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var worldFactory = new WorldFactory(options);

                //when
                var execute = function () {
                    worldFactory.create();
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argument value is null should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var worldFactory = new WorldFactory(options);

                //when
                var execute = function () {
                    worldFactory.create(null);
                };

                //then
                expect(execute).toThrow();
            });


            it('Method with argument value "unknown" should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var worldFactory = new WorldFactory(options);

                //when
                var execute = function () {
                    worldFactory.create('unknown');
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argumen value "load" should return instance of LoadState', function () {

                //given
                var worldFactory = new WorldFactory({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                });

                //when
                var world = worldFactory.create();

                //then
                expect(state.constructor.name).toEqual('LoadState');
            });

            it('Method with argument value "play" should return instance of PlayState', function () {

                //given
                var worldFactory = new WorldFactory({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                });

                //when
                var world = worldFactory.create('play');

                //then
                expect(state.constructor.name).toEqual('PlayState');
            });
        });
    });
});