define([
  'songs/demosong/index',
  'core/stage/index',
  'project/audio_controls/index'
],function(demoSong,Stage,AudioControls){

  function MainController() {
    
  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      AudioControls.init();      
      demoSong.init();
    }
  };
  
  var mc = new MainController();
  mc.init();

});
