define(['game/Main'], function (Main) {

    describe('game.Main', function () {

        it('Main should have a not undefined "game" property', function () {

            var main = new Main({
                parent: 'hidden'
            });
            expect(main.game).not.toBeUndefined();
        });

        it('Main should have a not null "game" property', function () {

            var main = new Main({
                parent: 'hidden'
            });
            expect(main.game).not.toBeNull();
        });

    });

});