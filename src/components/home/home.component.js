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
      this.player1 = new Player('Player 1','X', 'blue');
      this.player2= new Player('Player 2','O', 'red');
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
      this.vv = 'X';
      

      $timeout((()=>{this.vv='O'}).bind(this), 1000);
    }
    setPlayerName(player, name){
      this[player].name = name;
      this[player].ro = name+'ro';

    }
  }
};
