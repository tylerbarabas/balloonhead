define([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function() {
  "use strict";

  var Stage = {
    domElement: document.getElementById('content-stage'),
    cjs: new createjs.Stage("content-stage"),
    update: function() {
      this.cjs.update();
    }
  };

  return Stage;
});
