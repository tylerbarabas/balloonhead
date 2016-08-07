define([
  'songs/mouth/index',
  'project/audio_controls/index',
  'core/stage/index'
],function(Mouth,AudioControls,Stage){

  function MainController() {

  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      AudioControls.init();
      Mouth.init();
    }
  };

  var mc = new MainController();
  mc.init();

});
