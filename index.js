define([
  'songs/intro/index',
  'core/three_stage/index',
  'core/stage/index'
],function(intro,ThreeStage,Stage){

  function MainController() {

  }

  MainController.prototype = {
    init: function() {
      // Stage.init();
      ThreeStage.init();
      intro.init();
    }
  };

  var mc = new MainController();
  mc.init();

});
