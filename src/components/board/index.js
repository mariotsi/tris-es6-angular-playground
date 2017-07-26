import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { BlockComponent } from './block.component';

export * from './block.component';

export default angular.module('block', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(BlockComponent.selector, BlockComponent)
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
