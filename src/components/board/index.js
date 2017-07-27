import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { BoardComponent } from './board.component';

export * from './board.component';

export default angular.module('board', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(BoardComponent.selector, BoardComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('home', {
  //         url: '/home',
  //         template: '<other></other>'
  //     });
}
