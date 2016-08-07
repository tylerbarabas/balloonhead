define([
  'core/item/index'
],function(Item){

  function SpriteSheet() {
    console.log('SpriteSheet constructor');
  }

  SpriteSheet.prototype = Object.create(Item.prototype);
  SpriteSheet.prototype.constructor = Item;

  SpriteSheet.prototype = {
    init: function() {
      // Item.prototype.init();
    }
  };

  return SpriteSheet;

});
