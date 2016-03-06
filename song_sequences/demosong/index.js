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


  Song.prototype.start = function(){
    this.play();

    Stage.cjs.addChild(BalloonHead);
      Stage.update();

      var colors = ['blue','purple','red','green'],
          bgColors = ['purple','red','green','blue'],
          i=0,
          size = 50;

      document.body.style.backgroundColor = bgColors[bgColors.length-1];

      setInterval(function(){
        if (i >= colors.length) i = 0;
        BalloonHead.graphics.beginFill(colors[i]).drawCircle(0, 0, 100);
        Stage.update();

        document.body.style.backgroundColor = bgColors[i];

        i++;
      },333);
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
