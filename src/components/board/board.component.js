import './board.less';
import template from './board.html';

export let BoardComponent = {
  templateUrl: template,
  selector: 'board',
  bindings: {
    value: '<',
    players: '<'
  },
  /* @ngInject */
  controller: class BoardCtrl {
    /* @ngInject */
    constructor($state, $timeout) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, {$state, $timeout});
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
      this.blocks = [
        [{pos: '0.0'}, {pos: '0.1'}, {pos: '0.2'}],
        [{pos: '1.0'}, {pos: '1.1'}, {pos: '1.2'}],
        [{pos: '2.0'}, {pos: '2.1'}, {pos: '2.2'}]
      ];
      this.turn = 'player1';
      //$timeout(()=>this.blocks[1][1].pos = 'centro', 2000)
    }

    getFlattenBlocks() {
      return this.blocks.reduce((acc, item) => [...acc,...item], []);
    }
    blockClicked(pos){
      const [x,y] = pos.split('.');
      this.blocks[x][y].player = this.players[this.turn];
      this.changeTurn();
    }
    changeTurn(){
      this.turn = this.turn === 'player1'? 'player2': 'player1';
      console.log(this.turn);
    }
  }
};
