define([
  'core/sprite_sheet/index',
  'text!project/mouth/json/mouth.json'
],function(SpriteSheet,MouthJson){

  function Mouth() {
    this.json = JSON.parse(MouthJson);
    SpriteSheet.call(this);
  }

  Mouth.prototype = Object.create(SpriteSheet.prototype);
  Mouth.prototype.constructor = SpriteSheet;

  Mouth.prototype.init = function() {
    this.dom.id = 'mouth';
    this.style('position','absolute');
    this.style('left','400px');
    this.style('top','410px');
    this.style('height','25px');
    this.style('z-index','2');

    SpriteSheet.prototype.init.call(this);
  };

  return Mouth;

});
