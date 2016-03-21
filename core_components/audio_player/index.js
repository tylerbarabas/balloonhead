define([
  'project/audio_controls/index',
],function(AudioControls){
  function AudioPlayer() {
    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
    createjs.Sound.alternateExtensions = ["mp3"];
    this.loaded = false;
    this.playing = false;
    this.dom = document.createElement('DIV');
    this.currentAudio = {
      path: null,
      title: null
    };
  }

  AudioPlayer.prototype = {
    loadFile: function(audioPath,title) {
      createjs.Sound.registerSound(audioPath, title);
      createjs.Sound.on("fileload", this.onFileLoad, this);
      this.currentAudio.path = audioPath;
      this.currentAudio.title = title;
    },
    onFileLoad: function() {
      this.loaded = true;
      this.dispatchEvent('songLoaded',{path: this.currentAudio.path, title: this.currentAudio.title});
    },
    play: function(title) {
      if (!this.loaded || this.playing) return;
      if (!this.cjs) {
        this.cjs = createjs.Sound.play(title);
      } else {
        this.cjs.play(title);
      }
      this.playing = true;
    },
    pause: function() {
      this.cjs.setPaused(true);
      this.playing = false;
    },
    stop: function(title) {
      createjs.Sound.stop(title);
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
    removeEvent: function(evtName,func) {
      this.dom.removeEventListener(evtName,func);
    },
    dispatchEvent: function(evtName,params) {
      var evt = document.createEvent('Event');
      evt.initEvent(evtName,true,true);
      evt.params = params;
      this.dom.dispatchEvent(evt);
    }
  };

  if (typeof window['audio-player'] === 'undefined') {
    window['audio-player'] = new AudioPlayer();
  }

  return window['audio-player'];
});
