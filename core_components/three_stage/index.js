define([],function() {
  "use strict";

  function ThreeStage() {
    this.dom = null;
  }

  ThreeStage.prototype = {
    init: function() {
      this.dom = document.getElementById('three-stage');
      this.overlay = document.getElementById('overlay');
      this.pageScale = 1;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( this.dom.offsetWidth, this.dom.offsetHeight );
      this.dom.appendChild( this.renderer.domElement );

      this.renderFuncs = [];

      this.camera.position.z = 5;

      setTimeout(function(){
        this.resize();
        this.dom.style.visibility = 'visible';
        window.addEventListener('resize',this.resize.bind(this));

        this.render();
      }.bind(this),25);
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

      this.renderer.setSize( this.dom.offsetWidth, this.dom.offsetHeight );

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
    showOverlay: function() {
      this.overlay.style.opacity = 0;
    },
    render: function () {
			requestAnimationFrame( this.render.bind(this) );

      for(var i=0;i<this.renderFuncs.length;i++) {
        this.renderFuncs[i]();
      }

			this.renderer.render(this.scene, this.camera);
		}
  };

  if (typeof window.threestage === 'undefined') {
		window.threestage = new ThreeStage();
	}

	return window.threestage;
});
