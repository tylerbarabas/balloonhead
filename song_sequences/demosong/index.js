define([
  'core/song_sequence/index',
  'text!songs/demosong/sequence.json'
],function(SongSequence,sequence){
  
  sequence = JSON.parse(sequence);

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
    console.log(sequence[0]);
    
    console.log(this[sequence[0][0]],sequence[0][1],sequence[0][2]);
    
    for (var i=0;i<sequence.length;i++){
      this.addSongEvent(this[sequence[i][0]].bind(this),sequence[i][1],sequence[i][2]);      
    }
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
