import './playerPlate.less';
import template from './playerPlate.html';


export let PlayerPlateComponent = {
  templateUrl: template,
  selector: 'playerPlate',
  bindings: {
    player: '<',
    onNameChange: '&'
  },
  /* @ngInject */
  controller: class PlayerPlateCtrl {
    /* @ngInject */
    constructor($state) {
      Object.assign(this, { $state });
    }
    changeName() {
      this.onNameChange({ name: this.player.name });
    }
  }
};

export class SelectOnClickDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {};
  }
  link(scope, element) {
    element.on('click',() => {
      element.select();
    });
  }
}

