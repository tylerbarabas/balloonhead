define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index'
],function(SongSequence,BalloonHead,Stage){

  function Song() {
    SongSequence.call(this);
    this.colors = ['red','green','blue','purple','orange'];
    this.colorIndex = 0;
  }

  Song.prototype = Object.create(SongSequence.prototype);
  Song.prototype.constructor = SongSequence;

  Song.prototype.init = function() {
    this.audioPath = this.rootPath + 'demosong/demosong.mp3';
    this.title = 'Spacy Three Beat';
    this.bpm = 180;
    this.timeSignature = '3/4';
    SongSequence.prototype.init.call(this);
  };

  Song.prototype.registerSongEvents = function() {
    this.addSongEvent(this.toggleColors.bind(this),this.getTime(1,1),['q','q','q','b','q','q','q','b','q','q','q','b','q','q','q','b','q','q','q','b','q','q','q','b','q','q','q','b']);
  };
  
  Song.prototype.toggleColors = function () {
    document.body.style.backgroundColor = this.colors[this.colorIndex];
    this.colorIndex++;
    if (this.colorIndex > this.colors.length-1) this.colorIndex = 0;
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
