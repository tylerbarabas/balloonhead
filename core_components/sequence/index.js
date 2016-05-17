define([
  'core/audio_player/index',
  'project/audio_controls/index',
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
],function(AudioPlayer,AudioControls){

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
    this.instructions = [];

    this.dom = document.createElement('DIV');
    this.cjs = false;
  }

  SongSequence.prototype = {

    init: function() {
      AudioPlayer.addEvent('songLoaded',this.onFileLoad.bind(this));
      AudioPlayer.loadFile(this.audioPath,this.title);
      // AudioControls.loading = true;
      // AudioControls.toggleLoadingIcon(true);
      // AudioControls.addEvent('play-btn', this.play.bind(this));
      // AudioControls.addEvent('pause-btn', this.pause.bind(this));
    },
    onFileLoad: function(evt) {
      if (evt.params.title === this.title) {
        this.loaded = true;
        // AudioControls.loading = false;
        // AudioControls.toggleLoadingIcon(false);
        this.calculateSubdivisions();
        this.registerSongEvents();
      } else {
        this.loaded = false;
      }
    },
    calculateSubdivisions: function() {
      var bpms = (60/this.bpm)*1000;
      this.time.quarterNote = this.time.beat = bpms;
      this.time.halfNote = this.time.quarterNote*2;
      this.time.wholeNote = this.time.halfNote*2;
      this.time.eighthNote = this.time.quarterNote/2;
      this.time.sixteenthNote = this.time.eighthNote/2;
      this.time.thirtySecondNote = this.time.sixteenthNote/2;
      this.time.eighthNoteTriplet = this.time.quarterNote/3;
      this.time.sixteenthNoteTriplet = this.time.eighthNoteTriplet/2;
      this.time.bar = parseInt(this.timeSignature.split('/')[0]) * this.time.quarterNote;
    },
    getTime: function(bar,beat) {
      return parseInt(((bar-1) * this.time.bar) + ((beat-1) * this.time.beat));
    },
    play: function() {
      this.ticker = setInterval(this.tick.bind(this),10);
      AudioPlayer.play(this.title);
      this.playing = true;
      // AudioControls.togglePlayPauseBtn(true);
    },
    pause: function() {
      AudioPlayer.pause();
      this.playing = false;
      // AudioControls.togglePlayPauseBtn(false);
      this.stopTicker();
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
    addSongEvent: function(func,pos,rhythm) {
      rhythm = rhythm || false;
      if (typeof rhythm === 'object') {
        this.parseRhythm(pos, func,rhythm);
        return;
      }
      this.songEvents.push({pos: pos, func: func});
    },
    registerSongEvents: function() {
      for (var i in this.instructions){
        var func = this[this.instructions[i][0]].bind(this),
            time = this.instructions[i][1],
            rhythm = this.instructions[i][2];
        if (typeof time == 'object') {
          time = this.getTime(time.bar,time.beat);
        }
        this.addSongEvent(func,time,rhythm);
      }
    },
    parseRhythm: function(originalPos, originalFunc, rhythm) {
      var addTime = originalPos;
      for (var i=0;i<rhythm.length;i++) {
        this.addSongEvent(originalFunc,addTime);
        var current = rhythm[i].toLowerCase().split('');
        for (var j=0;j<current.length;j++) {
          switch(current[j]) {
            case 'b': addTime += this.time.bar;
              break;
            case 'w': addTime += this.time.wholeNote;
              break;
            case 'h': addTime += this.time.halfNote;
              break;
            case 'q': addTime += this.time.quarterNote;
              break;
            case 'e': addTime += this.time.eighthNote;
              break;
            case 's': addTime += this.time.sixteenthNote;
              break;
            case 't': addTime += this.time.thirtySecondNote;
              break;
            case 'z': addTime += this.time.eighthNoteTriplet;
              break;
            case 'x': addTime += this.time.sixteenthNoteTriplet;
              break;
          }
        }
      }
    },
    stop: function() {
      this.playing = false;
      AudioPlayer.stop(this.title);
    },
    getPosition: function() {
      return AudioPlayer.getPosition();
    },
    setPosition: function(pos) {
      AudioPlayer.setPosition(pos);
    },
    addEvent: function(evtName,func) {
      this.dom.addEventListener(evtName,func);
    },
    removeEvent: function(evtName,func) {
      this.dom.removeEventListener(evtName,func);
    },
    dispatchEvent: function(evtName) {
      var evt = document.createEvent('Event');
      evt.initEvent(evtName,true,true);
      this.dom.dispatchEvent(evt);
    }
  };

  return SongSequence;

});
