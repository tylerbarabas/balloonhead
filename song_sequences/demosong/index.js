define([
  'core/song_sequence/index',
  'text!songs/demosong/sequence.json'
],function(SongSequence,sequence){

  function Song() {
    SongSequence.call(this);
    this.colors = ['red','green','blue','purple','orange'];
    this.colorIndex = 0;
    this.sequence = JSON.parse(sequence);
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
