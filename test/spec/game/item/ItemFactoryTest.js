define(['game/item/ItemFactory'], function (ItemFactory) {

    describe('spec/game/item/ItemFactoryTest', function () {

        describe('game.item.ItemFactory', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var game = new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox');
                var options = {
                    'game': game,
                };

                //when 
                var execute = function () {
                    new ItemFactory(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new ItemFactory(options);
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
                    new ItemFactory(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.item.ItemFactory.create', function () {

            it('Method without argument should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var itemFactory = new ItemFactory(options);

                //when
                var execute = function () {
                    itemFactory.create();
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argument value is null should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var itemFactory = new ItemFactory(options);

                //when
                var execute = function () {
                    itemFactory.create(null);
                };

                //then
                expect(execute).toThrow();
            });


            it('Method with argument value "unknown" should throw exception', function () {

                //given
                var options = {
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                };
                var itemFactory = new ItemFactory(options);

                //when
                var execute = function () {
                    itemFactory.create('unknown');
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argument value "land" should return instance of Land', function () {

                //given
                var itemFactory = new ItemFactory({
                    'game': new Phaser.Game(32, 24, Phaser.AUTO, 'sandbox')
                });

                //when
                var item = itemFactory.create('land');

                //then
                expect(item.constructor.name).toEqual('Land');
            });
        });
    });
});