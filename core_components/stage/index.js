define([],function() {
  "use strict";

  function Stage() {
    this.dom = null;
  }

  Stage.prototype = {
    init: function() {
      this.dom = document.getElementById('content-stage');
      this.blackOverlay = document.getElementById('black-overlay');
      this.pageScale = 1;
      this.resize();
      this.dom.style.visibility = 'visible';
      window.addEventListener('resize',this.resize.bind(this));
    },
    resize: function() {
      var div_w = this.dom.clientWidth, div_h = this.dom.clientHeight;

      var scale_w = window.innerWidth / div_w;
      var scale_h = window.innerHeight / div_h;

      this.pageScale = Math.min(scale_w, scale_h) * 0.95;
      document.body.style.webkitTransform = 'scale(' + this.pageScale + ')';
      document.body.style.msTransform = 'scale(' + this.pageScale + ')';
      document.body.style.transform = 'scale(' + this.pageScale + ')';

      var move_x = ( window.innerWidth - this.dom.clientWidth * this.pageScale) / 2;
      var move_y = ( window.innerHeight - this.dom.clientHeight * this.pageScale) / 2;

      var compensateLeft = ( window.innerWidth - this.dom.clientWidth * this.pageScale) / 8;

      move_x = (move_x / this.pageScale);
      move_y = (move_y / this.pageScale) - 7;

      this.dom.style.top = move_y + 'px';
      this.dom.style.left = move_x + 'px';
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

    },
    style: function (attr,val) {
      this.dom.style[attr] = val;
    },
    showBlackOverlay: function() {
      this.blackOverlay.style.opacity = 0;
    }
  };

  if (typeof window.stage === 'undefined') {
		window.stage = new Stage();
	}

	return window.stage;
});
