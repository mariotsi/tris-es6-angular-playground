import './block.less';
import template from './block.html';

export let BlockComponent = {
  templateUrl: template,
  selector: 'block',
  bindings: {
    value: '<',
    onBlockClicked: '&'
  },
  /* @ngInject */
  controller: class BlockCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
      console.log(this.value);
    }
  }
};
