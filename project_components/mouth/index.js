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
    this.style('height','500px');
    this.style('position','absolute');
    this.style('left','40%');

    SpriteSheet.prototype.init.call(this);
  };

  return Mouth;

});
