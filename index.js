define([
  'songs/demosong/index',
],function(demoSong){

  var MainController = {
    init: function() {
      // console.log(demoSong.init);
      demoSong.init();
      // demoSong.registerSongEvents();
    }
  };

  MainController.init();
});
