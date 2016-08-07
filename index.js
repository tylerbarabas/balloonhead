define([
  'songs/amazing_experience/index',
  'core/stage/index'
],function(AmazingExperience,Stage){

  function MainController() {

  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      AmazingExperience.init();
    }
  };

  var mc = new MainController();
  mc.init();

});
