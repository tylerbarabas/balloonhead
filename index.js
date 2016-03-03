define([
  'controllers/song1',
],function(Song1){

  var MainController = {
    init: function() {
      Song1.start();
    }
  };

  //init the controller
  MainController.init();

});
