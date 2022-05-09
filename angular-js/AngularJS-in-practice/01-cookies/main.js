var app = angular.module('angularDemo', ['ngCookies'])
  .controller('AppCtrl', function($cookies) {

    // // PUT
    // $cookies.put('key', 'value');
    // alert($cookies.get('key'));

    // PUTOBJECT
    $cookies.putObject('key', { 'k1': 'value-1' });
    alert($cookies.getObject('key').k1);
  });
