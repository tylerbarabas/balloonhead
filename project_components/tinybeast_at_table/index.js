define([
  'core/sprite_sheet/index',
  'text!project/tinybeast_at_table/json/tinybeast_at_table.json'
],function(SpriteSheet,tinybeast_at_tableJson){

  function tinybeast_at_table() {
    this.json = JSON.parse(tinybeast_at_tableJson);
    SpriteSheet.call(this);
  }

  tinybeast_at_table.prototype = Object.create(SpriteSheet.prototype);
  tinybeast_at_table.prototype.constructor = SpriteSheet;

  tinybeast_at_table.prototype.init = function() {
    this.dom.id = 'tinybeast_at_table';
    this.style('position','absolute');
    this.style('top','100px');
    this.style('z-index','1');

    SpriteSheet.prototype.init.call(this);
  };

  return tinybeast_at_table;

});
