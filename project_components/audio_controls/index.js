define([
  'songs/demosong/index',
  'lib/tweenjs/lib/tweenjs-0.6.2.min'
],function(demoSong){

  function AudioControls () {
    this.playing = false;
  }

  AudioControls.prototype = {

    init: function() {
      this.dom = document.createElement('DIV');

      this.pauseBtn = document.getElementById('btn-pause');
      this.pauseBtn.addEventListener('click',this.pauseBtnClick.bind(this));

      this.playBtn = document.getElementById('btn-play');
      this.playBtn.addEventListener('click',this.playBtnClick.bind(this));

      this.loadingIcon = document.getElementById('loading');
      this.loading = false;
    },
    playBtnClick: function(dispatch) {
      if (this.loading) return;

      this.togglePlayPauseBtn(true);
      this.dispatchEvent('play-btn');
    },
    pauseBtnClick: function(dispatch) {
      this.togglePlayPauseBtn(false);
      this.dispatchEvent('pause-btn');
    },
    togglePlayPauseBtn: function (playing) {
      if (playing) {
        this.pauseBtn.style.display = "block";
        this.playBtn.style.display = "none";
      } else {
        this.pauseBtn.style.display = "none";
        this.playBtn.style.display = "block";
      }
    },
    toggleLoadingIcon: function(loading) {
      if (loading) {
        this.loadingIcon.style.display = 'inline-block';
        this.playBtn.style.opacity = 0.5;
      } else {
        this.loadingIcon.style.display = 'none';
        this.playBtn.style.opacity = 1;
      }
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

  if (typeof window['audio-controls'] === 'undefined') {
    window['audio-controls'] = new AudioControls();
  }

  return window['audio-controls'];

});
