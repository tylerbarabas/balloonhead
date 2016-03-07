define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index'
],function(SongSequence,BalloonHead,Stage){

  function Song() {
    SongSequence.call(this);
  }

  Song.prototype = Object.create(SongSequence.prototype);
  Song.prototype.constructor = SongSequence;

  Song.prototype.init = function() {
    this.audioPath = this.rootPath + 'demosong/demosong.mp3';
    this.title = 'Spacy Three Beat';
    this.bpm = 60;
    this.timeSignature = '4/4';
    SongSequence.prototype.init.call(this);
  };

  Song.prototype.registerSongEvents = function() {
    this.addSongEvent(this.getTime(1,1),function() {
      document.body.style.backgroundColor = "red";
    });

    this.addSongEvent(this.getTime(1,3),function() {
      document.body.style.backgroundColor = "purple";
    });

    this.addSongEvent(this.getTime(1,4),function() {
      document.body.style.backgroundColor = "blue";
    });

    this.addSongEvent(this.getTime(2,1),function() {
      document.body.style.backgroundColor = "green";
    });

    this.addSongEvent(this.getTime(2,3),function() {
      document.body.style.backgroundColor = "orange";
    });

    this.addSongEvent(this.getTime(2,4),function() {
      document.body.style.backgroundColor = "pink";
    });

    this.addSongEvent(this.getTime(3,1),function() {
      document.body.style.backgroundColor = "red";
    });

    this.addSongEvent(this.getTime(3,3),function() {
      document.body.style.backgroundColor = "purple";
    });

    this.addSongEvent(this.getTime(3,4),function() {
      document.body.style.backgroundColor = "blue";
    });

    this.addSongEvent(this.getTime(4,1),function() {
      document.body.style.backgroundColor = "green";
    });

    this.addSongEvent(this.getTime(4,3),function() {
      document.body.style.backgroundColor = "orange";
    });

    this.addSongEvent(this.getTime(4,4),function() {
      document.body.style.backgroundColor = "pink";
    });
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
