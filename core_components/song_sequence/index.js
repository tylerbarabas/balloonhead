define([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function(){

  function SongSequence () {
    this.title = null;
    this.audioPath = null;
    this.bpm = null;
    this.timeSignature = null;

    this.loaded = false;
    this.playing = false;
    this.rootPath = 'song_sequences/';

    this.dom = document.createElement('DIV');
    this.cjs = false;

    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
  }

  SongSequence.prototype = {

    init: function() {
      createjs.Sound.registerSound(this.audioPath, this.title);
      createjs.Sound.on("fileload", this.onFileLoad, this);
    },

    onFileLoad: function() {
      this.loaded = true;
      this.dispatchEvent('songLoaded');
    },

    play: function() {
      if (!this.loaded) return;
      
      if (!this.cjs) {
        this.cjs = createjs.Sound.play(this.title);
      } else {
        this.cjs.play();
      }
      this.playing = true;
    },

    pause: function() {
      this.cjs.setPaused(true);
    },

    stop: function() {
      createjs.Sound.stop(this.title);
    },

    addEvent: function(evtName,func) {
      this.dom.addEventListener(evtName,func);
    },

    dispatchEvent: function(evtName) {
      var evt = document.createEvent('Event');
      evt.initEvent(evtName,true,true);
      this.dom.dispatchEvent(evt);
    }
  };

  return SongSequence;

});
