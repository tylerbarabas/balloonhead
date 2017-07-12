define([
  'core/item/index',
  'bower/animejs/anime.min'
],function(Item,anime){

  function TitleScreen(text) {

    text = text || '';

    this.dom = document.createElement('DIV');
    this.dom.id = 'title-screen-backdrop';
    this.style('background','linear-gradient(to bottom, #FFF, transparent)');
    this.style('text-align','center');
    this.style('height','100%');
    this.style('width','100%');
    this.style('position','absolute');
    this.style('top','0');
    this.style('left','0');
    this.style('opacity','0');
    this.style('font-size','25px');

    this.dom.innerHTML = '<p>'+text+'</p>';

    this.init();
  }

  TitleScreen.prototype = Object.create(Item.prototype);
  TitleScreen.prototype.constructor = Item;

  TitleScreen.prototype.init = function() {
    Item.prototype.init.call(this);
  };

  TitleScreen.prototype.show = function(){
    anime({targets: this.dom, opacity: 1, duration: 5000});
    anime({targets: this.dom.firstChild, fontSize: '55px', translateY: 150, duration: 5000});
  };

  TitleScreen.prototype.hide = function(){
    anime({targets: this.dom,  opacity: 0, duration: 5000, easing: 'linear'});
  };

  return TitleScreen;

});
