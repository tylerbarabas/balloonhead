define([
  'core/stage/index'
],function(Stage){

  function Item() {
    this.dom = null;
  }

  Item.prototype = {
    init: function() {
      Stage.dom.appendChild(this.dom);
    },
    style: function (attr,val) {
      this.dom.style[attr] = val;
    },
    moveTo: function(left, top) {
      if (typeof left === 'number') left += 'px';
      if (typeof top === 'number') top += 'px';

      if (typeof left === 'string') this.dom.style.left = left;
      if (typeof top === 'string') this.dom.style.top = top;
    },
    setTransition: function(transition,setChildren,element) {

      setChildren = setChildren || false;
      element = element || this.dom;

      element.style.transition = transition;
      element.style.WebkitTransition = transition;
      element.style.MozTransition = transition;

      if (!setChildren) return;

      var children = element.childNodes;
      for (var i=0;i<children.length;i++) {
        children[i].style.transition = transition;
        children[i].style.WebkitTransition = transition;
        children[i].style.MozTransition = transition;

        if (children[i].childNodes.length > 0) this.setTransition(transition,true,children[i]);
      }

    }
  };

  return Item;

});
