define([
  'core/item/index'
],function(Item){

  function BalloonHead() {
    this.dom = document.createElement('DIV');
    this.dom.className = 'balloon-head';
  }

  BalloonHead.prototype = Object.create(Item.prototype);
  BalloonHead.prototype.constructor = Item;

  BalloonHead.prototype.init = function() {
    Item.prototype.init.call(this);
  };

  return BalloonHead;

});
