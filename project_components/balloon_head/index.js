define([
  'core_components/item/index.js'
],function(StageItem){

  function BalloonHead() {
    this.dom = document.createElement('DIV');
    this.dom.className = 'balloon-head';
  }

  BalloonHead.prototype = Object.create(StageItem.prototype);
  BalloonHead.prototype.constructor = StageItem;

  BalloonHead.prototype.init = function() {
    StageItem.prototype.init.call(this);
  };

  return BalloonHead;

});
