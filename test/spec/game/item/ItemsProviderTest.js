define(['game/item/ItemsProvider'], function (ItemsProvider) {

    describe('spec/game/item/ItemsProviderTest', function () {

        describe('game.item.ItemsProvider', function () {

            it('Consturctor don\'t should throw exception', function () {

                //given 
                var options = {
                    'itemFactory': jasmine.createSpyObj('itemFactory', ['create'])
                };

                //when 
                var execute = function () {
                    new ItemsProvider(options);
                };

                //then    
                expect(execute).not.toThrow();
            });

            it('Consturctor without argument "options" should throw exception.', function () {

                //given 
                var options = undefined

                //when 
                var execute = function () {
                    new ItemsProvider(options);
                };

                //then    
                expect(execute).toThrow();
            });

            it('Consturctor without argument "options.itemFactory" should throw exception.', function () {

                //given 
                var options = {
                    'itemFactory': undefined
                };

                //when 
                var execute = function () {
                    new ItemsProvider(options);
                };

                //then    
                expect(execute).toThrow();
            });
        });

        describe('game.item.ItemsProvider.provideItems', function () {

            it('Method without argument should throw exception', function () {

                //given
                var options = {
                    'itemFactory': jasmine.createSpyObj('itemFactory', ['create'])
                };
                var itemsProvider = new ItemsProvider(options);

                //when
                var execute = function () {
                    itemsProvider.provideItems();
                };

                //then
                expect(execute).toThrow();
            });

            it('Method with argument value is null should throw exception', function () {

                //given
                var options = {
                    'itemFactory': jasmine.createSpyObj('itemFactory', ['create'])
                };
                var itemsProvider = new ItemsProvider(options);
              
                //when
                var execute = function () {
                    itemsProvider.create(null);
                };

                //then
                expect(execute).toThrow();
            });


            it('Method with specification.items argument should return instance of Array', function () {

                //given
                var itemsProvider = new ItemsProvider({
                    'itemFactory': jasmine.createSpyObj('itemFactory', ['create'])
                });
                  var specification = {
                    items: {}
                }


                //when
                var items = itemsProvider.provideItems(specification.items);

                //then
                expect(items.constructor.name).toEqual('Array');
            });

        });
    });
});