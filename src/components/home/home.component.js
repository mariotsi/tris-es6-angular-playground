import './home.less';
import template from './home.html';
import Player from '../../core/classes/Player.js';

export let HomeComponent = {
  templateUrl: template,
  selector: 'home',
  bindings: {},
  /* @ngInject */
  controller: class HomeCtrl {
    /* @ngInject */
    constructor($state, $timeout) {
      this.players = {
        player1: new Player('Player 1', 'times', 'blue'),
        player2: new Player('Player 2', 'circle-o', 'red')
      };
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, {$state});


      $timeout((() => {
        this.vv = 'O'
      }).bind(this), 1000);
    }

    setPlayerName(player, name) {
      this.players[player].name = name;
      this.players[player].ro = name + 'ro';

    }
  }
};
