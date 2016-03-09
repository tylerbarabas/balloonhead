define([
  'core/song_sequence/index',
  'text!songs/demosong/sequence.json',
  'project/balloon_head/index'
],function(ParentClass,Sequence,BalloonHead){

  function Song() {
    ParentClass.call(this);
  }

  Song.prototype = Object.create(ParentClass.prototype);
  Song.prototype.constructor = ParentClass;

  Song.prototype.init = function() {

    this.audioPath = this.rootPath + 'demosong/demosong.mp3';
    this.title = 'Spacy Three Beat';
    this.bpm = 180;
    this.timeSignature = '3/4';

    this.colors = ['red','green','blue','purple','orange'];
    this.colorIndex = 0;
    this.sequence = JSON.parse(Sequence);

    this.grow = true;

    ParentClass.prototype.init.call(this);
  };

  Song.prototype.showBalloonHead = function () {
    this.balloonHead = new BalloonHead();

    this.balloonHead.dom.style.top = '250px';
    this.balloonHead.dom.style.left = '500px';

    this.balloonHead.init();
  };

  Song.prototype.toggleSize = function() {
    if (this.grow) {
      this.balloonHead.dom.style.top = '0';
      this.balloonHead.dom.style.left = '500px';
      this.balloonHead.dom.style.height = '1308px';
      this.balloonHead.dom.style.width = '800px';
    } else {
      this.balloonHead.dom.style.top = '250px';
      this.balloonHead.dom.style.left = '500px';
      this.balloonHead.dom.style.height = '327px';
      this.balloonHead.dom.style.width = '200px';
    }
    this.grow = !this.grow;
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
