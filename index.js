define([
  'song_sequences/demosong/index',
],function(demosong){

  var MainController = {
    init: function() {
      demosong.init();
    }
  };

  //init the controller
  MainController.init();

});
