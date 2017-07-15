define(['game/state/StateFactory'], function (StateFactory) {

    describe('spec/game/state/StateFactoryTest', function () {

        describe('game.state.StateFactory', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var options = {
                    'game': game,
                };

                //when 
                var execute = function () {
                    new StateFactory(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new StateInitializer(options);
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
                    new StateFactory(options);
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
                var stateFactory = new StateFactory(options);

                //when
                var execute = function () {
                    stateFactory.create();
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argument value is null should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var stateFactory = new StateFactory(options);

                //when
                var execute = function () {
                    stateFactory.create(null);
                };

                //then
                expect(execute).toThrow();
            });


            it('Method with argument value "unknown" should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var stateFactory = new StateFactory(options);

                //when
                var execute = function () {
                    stateFactory.create('unknown');
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argumen value "load" should return instance of LoadState', function () {

                //given
                var stateFactory = new StateFactory({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                });

                //when
                var state = stateFactory.create('load');

                //then
                expect(state.constructor.name).toEqual('LoadState');
            });

            it('Method with argument value "play" should return instance of PlayState', function () {

                //given
                var stateFactory = new StateFactory({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                });

                //when
                var state = stateFactory.create('play');

                //then
                expect(state.constructor.name).toEqual('PlayState');
            });
        });
    });
});