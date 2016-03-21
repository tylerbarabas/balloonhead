define([
  'songs/intro/index',
  'core/stage/index',
  'project/audio_controls/index'
],function(intro,Stage,AudioControls){

  function MainController() {

  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      AudioControls.init();
      intro.init();
    }
  };

  var mc = new MainController();
  mc.init();

});
