define([
  'songs/everything_vibrates/index',
  'core/stage/index'
],function(EverythingVibrates,Stage){

  function MainController() {

  }

  MainController.prototype = {
    init: function() {
      Stage.init();
      EverythingVibrates.init();
    }
  };

  var mc = new MainController();
  mc.init();

});
