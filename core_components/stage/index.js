define([],function() {
  "use strict";

  function Stage() {
    this.dom = null;
  }

  Stage.prototype = {
    init: function() {
      this.dom = document.getElementById('content-stage');
      this.pageScale = 1;
      this.resize();
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
    setTransition: function(transition) {
      this.dom.style.transition = transition;
      this.dom.style.WebkitTransition = transition;
      this.dom.style.MozTransition = transition;
    },
    style: function (attr,val) {
      this.dom.style[attr] = val;
    }
  };

  if (typeof window.stage === 'undefined') {
		window.stage = new Stage();
	}

	return window.stage;
});
