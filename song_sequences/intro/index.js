define([
  'core/sequence/index',
  'text!songs/intro/instructions.json',
  'project/balloon_head/index',
  'core/stage/index',
  'project/backlit_door/index',
  'project_components/audio_controls/index.js'
],function(Sequence,Instructions,BalloonHead,Stage,BacklitDoor,AudioControls){

  function Song() {
    Sequence.call(this);
  }

  Song.prototype = Object.create(Sequence.prototype);
  Song.prototype.constructor = Sequence;

  Song.prototype.init = function() {

    this.audioPath = this.rootPath + 'intro/demosong.mp3';
    this.title = 'Spacy Three Beat';
    this.bpm = 180;
    this.timeSignature = '3/4';

    this.colors = ['red','green','blue','purple','orange'];
    this.colorIndex = 0;
    this.instructions = JSON.parse(Instructions);

    this.stage = Stage;
    this.audioControls = AudioControls;

    this.backlitDoor = new BacklitDoor();
    this.backlitDoor.style.top = '0px';
    this.backlitDoor.style.left = '0px';
    this.backlitDoor.init();

    Sequence.prototype.init.call(this);
  };

  Song.prototype.showBalloonHead = function () {
    this.balloonHead = new BalloonHead();

    this.balloonHead.style('top','250px');
    this.balloonHead.style('left','500px');
    this.balloonHead.style('opacity','0');
    this.balloonHead.setTransition('all 500ms');

    this.balloonHead.init();
    this.balloonHead.style('opacity',1);
  };

  Song.prototype.move1 = function() {
    this.balloonHead.moveTo('0px',null);
  };
  Song.prototype.move2 = function() {
    this.balloonHead.setTransition('2s');
    this.balloonHead.moveTo('500px','0px');
  };
  Song.prototype.rotate = function() {
    this.balloonHead.style('transform','rotate(360deg)');
  };
  Song.prototype.rollBackground = function() {
    this.stage.setTransition('2s');
    this.stage.style('background-position','-837px 0');
  };

  Song.prototype.audioControlsToCorner = function() {
    this.audioControls.setTransition('1s');
    this.audioControls.setTransition('1s',false,this.audioControls.playBtn);
    this.audioControls.setTransition('1s',false,this.audioControls.pauseBtn);

    this.audioControls.dom.className = 'top-left';
    this.audioControls.pauseBtn.className = this.audioControls.pauseBtn.baseClass + ' top-left';
    this.audioControls.playBtn.className = this.audioControls.playBtn.baseClass + ' top-left';
  };

  Song.prototype.openDoor = function() {
    this.stage.setTransition('5s',false,this.stage.blackOverlay);
    this.backlitDoor.open();
    this.stage.blackOverlay.style.opacity = 0;
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
