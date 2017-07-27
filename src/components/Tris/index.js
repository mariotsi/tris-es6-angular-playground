import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import {TrisComponent} from './tris.component';

export * from './tris.component';

export default angular.module('tris', [
  AppCore,
  uiRouter
])
  .component(TrisComponent.selector, TrisComponent)
  .name;
