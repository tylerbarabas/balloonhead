define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index'
],function(SongSequence,BalloonHead,Stage){

  function Song(){
    SongSequence.call(this);

    this.audioPath = this.rootPath + 'demosong/demosong.mp3';
    this.title = 'Spacy Three Beat';
    this.bpm = 60;
    this.timeSignature = '3/4';
  }

  Song.prototype = Object.create(SongSequence.prototype);
  Song.prototype.constructor = SongSequence;

  Song.prototype.init = function() {
    SongSequence.prototype.init.call(this);
    Song.registerSongEvents();
  };

  Song.registerSongEvents = function() {
    // SongSequence.registerSongEvents.call(this);
    Song.prototype.addSongEvent.call(this,1000,function() {
      document.body.style.backgroundColor = "red";
    });

    Song.prototype.addSongEvent.call(this,2000,function() {
      document.body.style.backgroundColor = "blue";
    });
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
