define([
  'core/item/index',
],function(Item){

  function TitleScreen(text) {

    text = text || '';

    this.dom = document.createElement('DIV');
    this.dom.id = 'title-screen-backdrop';
    this.style('background','linear-gradient(to bottom, white, transparent)');
    this.style('text-align','center');
    this.style('height','100%');
    this.style('width','100%');
    this.style('position','absolute');
    this.style('top','0');
    this.style('left','0');
    this.style('opacity','0');

    this.setTransition('all 3s');

    this.dom.innerHTML = '<h1>'+text+'</h1>';

    this.init();
  }

  TitleScreen.prototype = Object.create(Item.prototype);
  TitleScreen.prototype.constructor = Item;

  TitleScreen.prototype.init = function() {
    Item.prototype.init.call(this);
  };

  TitleScreen.prototype.show = function(){
    this.style('opacity','0.8');
  };

  TitleScreen.prototype.hide = function(){
    this.style('opacity','0');
  };

  return TitleScreen;

});
