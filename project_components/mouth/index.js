define([
  'core/sprite_sheet/index'
],function(SpriteSheet){

  function Mouth() {
    console.log('Mouth constructor');
  }

  Mouth.prototype = Object.create(SpriteSheet.prototype);
  Mouth.prototype.constructor = SpriteSheet;

  Mouth.prototype.init = function() {
    SpriteSheet.prototype.init.call(this);
    console.log('Mouth Init!',createjs);
  };

  return Mouth;

});
