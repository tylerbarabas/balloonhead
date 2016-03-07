define([
  'project_components/audio_controls/index.js',
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function(AudioControls){

  function SongSequence () {
    this.title = null;
    this.audioPath = null;
    this.bpm = null;
    this.timeSignature = null;

    this.loaded = false;
    this.playing = false;
    this.rootPath = 'song_sequences/';

    this.time = {};
    this.songEvents = [];

    this.dom = document.createElement('DIV');
    this.cjs = false;

    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
  }

  SongSequence.prototype = {

    init: function() {

      AudioControls.init();

      AudioControls.loading = true;
      AudioControls.toggleLoadingIcon(true);
      createjs.Sound.registerSound(this.audioPath, this.title);
      createjs.Sound.on("fileload", this.onFileLoad, this);

      AudioControls.addEvent('play-btn', this.play.bind(this));
      AudioControls.addEvent('pause-btn', this.pause.bind(this));

      this.addEvent('songLoaded',this.start.bind(this));

    },

    onFileLoad: function(evt) {
      this.loaded = true;

      AudioControls.loading = false;
      AudioControls.toggleLoadingIcon(false);

      this.calculateSubdivisions();
      this.registerSongEvents();

      this.dispatchEvent('songLoaded');
    },

    calculateSubdivisions: function() {
      var bpms = (this.bpm/60)*1000;
      this.time.quarterNote = this.time.beat = bpms;
      this.time.halfNote = this.time.quarterNote*2;
      this.time.wholeNote = this.time.halfNote*2;
      this.time.eighthNote = this.time.quarterNote / 2;
      this.time.sixteenthNote = this.time.eighthNote/2;
      this.time.bar = parseInt(this.timeSignature.split('/')[0]) * this.time.quarterNote;
    },

    getTime: function(bar,beat) {
      return parseInt(((bar-1) * this.time.bar) + ((beat-1) * this.time.beat));
    },

    play: function() {
      if (!this.loaded || this.playing) return;

      if (!this.cjs) {
        this.cjs = createjs.Sound.play(this.title);
      } else {
        this.cjs.play();
      }
      this.ticker = setInterval(this.tick.bind(this),10);

      this.playing = true;
      AudioControls.togglePlayPauseBtn(true);
    },

    pause: function() {
      this.cjs.setPaused(true);
      this.playing = false;
      AudioControls.togglePlayPauseBtn(false);

      this.stopTicker();
    },

    start: function() {
      // this.play();
    },

    tick: function() {
      if (this.songEvents.length === 0) {
        this.stopTicker();
        return;
      }

      var position = this.getPosition();
      if (this.songEvents[0].pos < position) {
        this.songEvents[0].func();
        this.songEvents.shift();
      }
    },

    stopTicker: function() {
      clearInterval(this.ticker);
    },

    addSongEvent: function(pos,func) {
      this.songEvents.push({pos: pos, func: func});
    },

    stop: function() {
      createjs.Sound.stop(this.title);
    },

    getPosition: function() {
      return this.cjs.getPosition();
    },

    setPosition: function(pos) {
      this.cjs.setPosition(pos);
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
