import angular from 'angular';

angular.module('Tris')
    .config(config);

/* @ngInject */
function config ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}
