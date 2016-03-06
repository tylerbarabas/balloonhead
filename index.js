define([
  'songs/demosong/index',
],function(demoSong){

  var MainController = {
    init: function() {
      demoSong.init();
    }
  };

  MainController.init();
});
