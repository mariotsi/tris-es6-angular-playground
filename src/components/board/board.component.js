import './board.less';
import template from './board.html';

function is(player) {
  return function (element) {
    return element.player && element.player.id === player;
  };
}
function checkArray(candidate) {
  if (candidate.every(is('player1'))) {
    return 'player1';
  }
  if (candidate.every(is('player2'))) {
    return 'player2';
  }
  return false;
}
function checkRows() {
  let winner;
  for (const row of this.blocks) {
    if (winner = checkArray(row)) {
      return winner;
    }
  }
  return false;
}
function checkColumns() {
  for (let y = 0; y < this.blocks[0].length; y++) {
    const column = [];
    // make a new column
    for (let x = 0; x < this.blocks.length; x++) {
      column.push(this.blocks[x][y]);
    }
    let winner;
    if (winner = checkArray(column)) {
      return winner;
    }
  }
  return false;
}
function checkDiagonals() {
  const diagonal1 = [];
  const diagonal2 = [];
  // make a new column
  for (let x = 0; x < this.blocks.length; x++) {
    diagonal1.push(this.blocks[x][x]);
    diagonal2.push(this.blocks[x][this.blocks.length - 1 - x]);
  }
  let winner;
  if (winner = (checkArray(diagonal1) || checkArray(diagonal2))) {
    return winner;
  }

  return false;
}
export let BoardComponent = {
  templateUrl: template,
  selector: 'board',
  bindings: {
    value: '<',
    players: '<',
    onWinner: '&',
    onTie: '&'
  },
  /* @ngInject */
  controller: class BoardCtrl {
    /* @ngInject */
    constructor($state, $timeout) {
      Object.assign(this, {$state, $timeout});
      this.gameEnded = false;
    }

    $onInit() {
      this.blocks = [
        [{pos: '0.0'}, {pos: '0.1'}, {pos: '0.2'}],
        [{pos: '1.0'}, {pos: '1.1'}, {pos: '1.2'}],
        [{pos: '2.0'}, {pos: '2.1'}, {pos: '2.2'}]
      ];
      this.changeTurn('player1');
    }

    getFlattenBlocks() {
      return this.blocks.reduce((acc, item) => [...acc, ...item], []);
    }

    blockClicked(pos) {
      const [x, y] = pos.split('.');
      if (!this.gameEnded && !this.blocks[x][y].player) {
        this.blocks[x][y].player = this.players[this.turn];
        this.changeTurn();
        this.checkWinner();
      }
    }

    changeTurn(player) {
      if (player) {
        this.players[player].yourTurn();
        this.players[player === 'player1' ? 'player2' : 'player1'].oppositeTurn();
        this.turn = player;
      } else {
        this.turn = Object.keys(this.players).reduce((acc, player) => {
          return this.players[player].toggleTurn() ? player : acc;
        }, null);
      }
    }

    checkWinner() {
      let winner;
      if (winner = (checkRows.call(this) || checkDiagonals.call(this) || checkColumns.call(this))) {
        this.gameEnded = true;
        this.players[this.turn].oppositeTurn();
        this.onWinner({player: this.players[winner]});
      } else if (this.getFlattenBlocks().every(element => element.player)) { // check if is a tie

        this.gameEnded = true;
        this.players[this.turn].oppositeTurn();
        this.onTie();
      }
    }
  }
};
