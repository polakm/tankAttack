define(['game/Main'], function (Main) {

    describe('spec/game/MainTest', function () {

        describe('game.Main', function () {

            it('Constructor don\'t should throw exception', function () {

                //given 
                var options = {
                    parent: 'sandbox',
                    stateFactory: jasmine.createSpyObj('stateInitializer', ['create']),
                    stateInitializer: jasmine.createSpyObj('stateInitializer', ['registerStates', 'startState'])
                }

                //when 
                var execute = function () {
                    new Main(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

        });

        describe('game.Main.run', function () {

            it('Method don\'t should throw exception', function () {

                //given
                var options = {
                    parent: 'sandbox',
                    stateFactory: jasmine.createSpyObj('stateInitializer', ['create']),
                    stateInitializer: jasmine.createSpyObj('stateInitializer', ['registerStates', 'startState'])
                };
                var main = new Main(options);

                //when
                var execute = function () {
                    main.run();
                };

                //then
                expect(execute).not.toThrow();
            });
        });
    });
});