define(['game/state/StateInitializer'], function (StateInitializer) {

    describe('spec/game/state/StateInitializerTest', function () {

        describe('game.state.StateInitializer', function () {

            it('Consturctor don\'t should throw exception.', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };

                //when 
                var execute = function () {
                    new StateInitializer(options);
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
                    new StateInitializer(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.state.StateInitializer.registerStates', function () {

            it('Method with "states" argument, don\'t should throw exception.', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var stateInitializer = new StateInitializer({
                    'game': game
                });
                var states = {
                    'test': new Phaser.State('test')
                }

                //when 
                var execute = function () {
                    stateInitializer.registerStates(states);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('After run method with "states" argument, "game.state.states" should be have same properties like method argument.', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var stateInitializer = new StateInitializer({
                    'game': game
                });
                var states = {
                    'stateTest1': {
                        'test': 1
                    },
                    'stateTest2': {
                        'test': 2
                    }
                }

                //when 
                stateInitializer.registerStates(states);

                //then    
                expect(game.state.states['stateTest1']).toEqual(states['stateTest1']);
                expect(game.state.states['stateTest2']).toEqual(states['stateTest2']);
            });
        });
    });
});