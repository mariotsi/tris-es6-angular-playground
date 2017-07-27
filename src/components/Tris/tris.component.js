import './tris.less';
import template from './tris.html';
import Player from '../../core/classes/Player.js';

export let TrisComponent = {
  templateUrl: template,
  selector: 'home',
  bindings: {},
  /* @ngInject */
  controller: class TrisCtrl {
    /* @ngInject */
    constructor($state, $timeout) {
      this.players = {
        player1: new Player('Player 1', 'times', 'blue'),
        player2: new Player('Player 2', 'circle-o', 'red')
      };

      Object.assign(this, {$state});
    }
    setPlayerName(player, name) {
      this.players[player].name = name;
    }
    setWinner(player){
      this.winnerPlayer = player;
    }
    tie(){
      this.isTie = true;
    }
  }
};
