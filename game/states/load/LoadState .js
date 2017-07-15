define([], function () {

	var LoadState  = function LoadState(game) {
		
		this.game = game;
	}

	LoadState.prototype = {

		game: null,

		preload: function () {

			this.showLoadingLabel();
			this.loadAssets();
		},

		showLoadingLabel: function(){
			
			var loadingLabel = this.game.add.text(20, 150, 'loading..', {
				font: '40px Courier',
				fill: '#afa'
			});
		},

		loadAssets: function () {

		},

		create: function () {
			this.game.state.start('play');
		}
	};

	return LoadState;

});