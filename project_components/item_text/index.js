define([
  'core/item/index'
],function(Item){

  function ItemText(text) {

    text = text || '';

    this.dom = document.createElement('DIV');
    this.dom.className = 'text-container';
    this.dom.innerHTML = text;
  }

  ItemText.prototype = Object.create(Item.prototype);
  ItemText.prototype.constructor = Item;

  ItemText.prototype.init = function() {
    Item.prototype.init.call(this);
  };

  return ItemText;

});
