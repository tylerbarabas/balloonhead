define([
  'lib/easeljs/lib/easeljs-0.8.2.min'
],function(){

  function BalloonHead() {
    this.dom = document.createElement('DIV');
    this.dom.className = 'balloon-head';
  }

  BalloonHead.prototype.init = function() {
    document.body.appendChild(this.dom);
  };

  return BalloonHead;

});
