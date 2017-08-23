define([
  'core/sprite_sheet/index',
  'text!project/bbbeast_at_table/json/bbbeast_at_table.json'
],function(SpriteSheet,bbbeast_at_tableJson){

  function bbbeast_at_table() {
    this.json = JSON.parse(bbbeast_at_tableJson);
    SpriteSheet.call(this);
  }

  bbbeast_at_table.prototype = Object.create(SpriteSheet.prototype);
  bbbeast_at_table.prototype.constructor = SpriteSheet;

  bbbeast_at_table.prototype.init = function() {
    this.dom.id = 'bbbeast_at_table';
    this.style('position','absolute');
    this.style('top','100px');
    this.style('z-index','1');

    SpriteSheet.prototype.init.call(this);
  };

  return bbbeast_at_table;

});
