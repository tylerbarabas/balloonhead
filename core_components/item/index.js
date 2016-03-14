define([
  'core/stage/index'
],function(Stage){

  function StageItem() {
    this.dom = null;
  }

  StageItem.prototype = {
    init: function() {
      Stage.dom.appendChild(this.dom);
    },
    style: function (attr,val) {
      this.dom.style[attr] = val;
    },
    moveTo: function(left, top) {
      if (typeof left === 'string') this.dom.style.left = left;
      if (typeof top === 'string') this.dom.style.top = top;
    },
    setTransition: function(transition) {
      this.dom.style.transition = transition;
      this.dom.style.WebkitTransition = transition;
      this.dom.style.MozTransition = transition;
    }
  };

  return StageItem;

});
