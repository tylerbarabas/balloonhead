define([
  'songs/demosong/index',
  'core/stage/index'
],function(demoSong,Stage){

  function MainController() {
    
  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      demoSong.init();
    }
  };
  
  var mc = new MainController();
  mc.init();

});
