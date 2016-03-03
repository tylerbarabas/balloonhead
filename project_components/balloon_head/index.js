define([
  'lib/easeljs/lib/easeljs-0.8.2.min'
],function(){

  var balloonHead = new createjs.Shape();
  balloonHead.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  balloonHead.x = 100;
  balloonHead.y = 100;

  return balloonHead;

});
