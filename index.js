(function(){

  'use strict';

  console.log(navigator.onLine ? 'online' : 'offline');

  window.addEventListener('online', function(event) {
    console.log('online');
  }, false);

  window.addEventListener('offline', function(event) {
    console.log('offline');
  }, false);

}());
