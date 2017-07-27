import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { PlayerPlateComponent, SelectOnClickDirective } from './playerPlate.component';

export * from './playerPlate.component';

export default angular.module('playerPlate', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(PlayerPlateComponent.selector, PlayerPlateComponent)
  .directive('selectOnClick',() => new SelectOnClickDirective())
  .name;
// .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('Tris', {
  //         url: '/Tris',
  //         template: '<other></other>'
  //     });
}
