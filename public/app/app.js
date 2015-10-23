(function(angular){
    'use strict';

    //bg - shorthand for BorderGuru
    var module = angular.module('bgApp', ['ngMaterial']);

    module.config(function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('cyan');
    });
})(angular);