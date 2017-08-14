define(['game/world/WorldFactory'], function (WorldFactory) {

    describe('spec/game/world/WorldFactoryTest', function () {

        describe('game.world.WorldFactory', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'itemsProvider': jasmine.createSpyObj('itemsProvider', ['provideItems']),
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

                var options = {
                    'itemsProvider': jasmine.createSpyObj('itemsProvider', ['provideItems'])
                };

                //when 
                var execute = function () {
                    new WorldFactory(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.itemsProvider" should throw exception.', function () {

                //given 
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };

                //when 
                var execute = function () {
                    new WorldFactory(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.state.WorldFactory.create', function () {

            it('Method without argument should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'itemsProvider': jasmine.createSpyObj('itemsProvider', ['provideItems'])
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
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'itemsProvider': jasmine.createSpyObj('itemsProvider', ['provideItems'])
                };
                var worldFactory = new WorldFactory(options);

                //when
                var execute = function () {
                    worldFactory.create(null);
                };

                //then
                expect(execute).toThrow();
            });


            it('Method with specification argument should return instance of World', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox'),
                    'itemsProvider': jasmine.createSpyObj('itemsProvider', ['provideItems'])
                };
                var worldFactory = new WorldFactory(options);
                var specification = {
                    world: {
                        bounds: {
                            x: 0,
                            y: 0,
                            width: 32,
                            height: 24
                        }
                    },
                    items: {}
                }

                //when
                var world = worldFactory.create(specification);

                //then
                expect(world.constructor.name).toEqual('World');
            });

        });
    });
});