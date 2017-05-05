define([
  'core/sprite_sheet/index',
  'text!project/bbstump/json/bbstump.json'
],function(SpriteSheet,bbstumpJson){

  function bbstump() {
    this.json = JSON.parse(bbstumpJson);
    SpriteSheet.call(this);
  }

  bbstump.prototype = Object.create(SpriteSheet.prototype);
  bbstump.prototype.constructor = SpriteSheet;

  bbstump.prototype.init = function() {
    this.dom.id = 'mouth';
    this.style('height','500px');
    this.style('position','absolute');
    this.style('left','40%');
    this.style('border-radius','130px');

    SpriteSheet.prototype.init.call(this);
  };

  return bbstump;

});
