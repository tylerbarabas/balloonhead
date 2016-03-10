define([],function() {
  "use strict";
  
  function Stage() {
    this.dom = null;
  }

  Stage.prototype = {
    init: function() {
      this.dom = document.getElementById('content-stage');
      window.addEventListener('resize',this.onResize.bind(this));
    },
    onResize: function() {
      console.log('resize!');
    }
  };

  if (typeof window.stage === 'undefined') {
		window.stage = new Stage();
	}

	return window.stage;
});
