//import './block.less';
import template from "./playerPlate.html";
import angular from "angular";

export let PlayerPlateComponent = {
  templateUrl: template,
  selector: "playerPlate",
  bindings: {
    player: "<",
    onNameChange: "&"
  },
  /* @ngInject */
  controller: class PlayerPlateCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = "SuperNova";
      this.note = "Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router";
    }
    changeName() {
      this.onNameChange({ name: this.player.name });
    }
  }
};

export class SelectOnClickDirective {
  constructor() {

    this.restrict = "A";
    this.scope = {};

  }
  link(scope, element) {
    element.on('click',() => {
      element.select();
    });
  }
}

