define([
  'core/sprite_sheet/index',
  'text!project/bbwalk/json/bbwalk.json'
],function(SpriteSheet,bbwalkJson){

  function bbwalk() {
    this.json = JSON.parse(bbwalkJson);
    SpriteSheet.call(this);
  }

  bbwalk.prototype = Object.create(SpriteSheet.prototype);
  bbwalk.prototype.constructor = SpriteSheet;

  bbwalk.prototype.init = function() {
    this.dom.id = 'bbwalk';
    this.style('position','absolute');
    this.style('top','100px');
    this.style('z-index','1');

    SpriteSheet.prototype.init.call(this);
  };

  return bbwalk;

});
