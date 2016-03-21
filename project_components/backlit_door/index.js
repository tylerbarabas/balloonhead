define([
  'core/item/index'
],function(Item){

  function BacklitDoor() {
    this.dom = document.createElement('DIV');
    this.dom.className = 'backlit-door';

    this.innerDoor = document.createElement('DIV');
    this.innerDoor.className = 'inner-door';
    this.dom.appendChild(this.innerDoor);

    this.doorKnob = document.createElement('DIV');
    this.doorKnob.className = 'door-knob';
    this.innerDoor.appendChild(this.doorKnob);
  }

  BacklitDoor.prototype = Object.create(Item.prototype);
  BacklitDoor.prototype.constructor = Item;

  BacklitDoor.prototype.init = function() {
    Item.prototype.init.call(this);
  };

  BacklitDoor.prototype.open = function() {
    this.setTransition('2s',true);
    this.innerDoor.style.transform = 'rotateY(90deg)';
    this.dom.className = this.dom.className + ' open';
  };

  return BacklitDoor;

});
