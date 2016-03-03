define([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function(){

  function SongSequence () {
    this.title = null;
    this.audioPath = null;
  }

  SongSequence.prototype = {
    start: function() {
      console.log('Starting new song ' + this.title);
    },
    pause: function() {
      console.log('Pausing song ' + this.title);
    },
    reset: function() {
      console.log('Resetting song ' + this.title);
    }
  };

  return SongSequence;

});
