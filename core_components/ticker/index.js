define([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function(){

  function Ticker () {
    createjs.Ticker.addEventListener('tick',this.onTick.bind(this));

    this.ticks = 0;
  }

  Ticker.prototype = {
    onTick: function() {
      this.ticks++;
      // console.log('tick',this.ticks);
    }
  };

  return Ticker;
});
