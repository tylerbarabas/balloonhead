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
    this.dom.id = 'bbstump';
    this.style('position','absolute');
    this.style('left','210px');
    this.style('bottom','-60px');
    this.style('height','400px');

    SpriteSheet.prototype.init.call(this);
  };

  return bbstump;

});
