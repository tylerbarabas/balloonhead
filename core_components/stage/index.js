define([],function() {
  "use strict";

  function Stage() {
    this.dom = null;
  }

  Stage.prototype = {
    init: function() {
      this.dom = document.getElementById('content-stage');
      window.addEventListener('resize',this.resize.bind(this));
    },
    resize: function() {
      var div_w = this.dom.clientWidth, div_h = this.dom.clientHeight;

      console.log(div_w,div_h);

      var scale_w = window.innerWidth / div_w;
      var scale_h = window.innerHeight / div_h;

      var pageScale = Math.min(scale_w, scale_h) * 0.95;
      document.body.style.webkitTransform = 'scale(' + pageScale + ')';
      document.body.style.msTransform = 'scale(' + pageScale + ')';
      document.body.style.transform = 'scale(' + pageScale + ')';

      var move_x = ( window.innerWidth - this.dom.clientWidth * pageScale) / 2;
      var move_y = ( window.innerHeight - this.dom.clientHeight * pageScale) / 2;
      //
      // move_x = move_x / pageScale;
      // move_y = move_y / pageScale;
      //
      this.dom.style.top = move_y + 'px';
      this.dom.style.left = move_x + 'px';
    }
  };

  if (typeof window.stage === 'undefined') {
		window.stage = new Stage();
	}

	return window.stage;
});
