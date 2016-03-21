define([
  'core/sequence/index',
  'text!songs/intro/instructions.json',
  'project/balloon_head/index',
  'core/stage/index',
  'project/backlit_door/index',
  'project/audio_controls/index',
  'project/item_text/index'
],function(Sequence,Instructions,BalloonHead,Stage,BacklitDoor,AudioControls,ItemText){

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

    this.showOpeningText();

    Sequence.prototype.init.call(this);
  };

  Song.prototype.onFileLoad = function(evt) {

    this.showLetsBegin();

    Sequence.prototype.onFileLoad.call(this,evt);
  };

  Song.prototype.showOpeningText = function() {
    this.iAmYou = new ItemText('I am you.');
    this.iAmYou.init();
    this.iAmYou.dom.className = 'i-am-you-text-container';
    this.iAmYou.setTransition('1s');
    setTimeout(function(){
      this.iAmYou.dom.style.opacity = 1;
    }.bind(this),2000);

    this.youAreMe = new ItemText('You are me.');
    this.youAreMe.init();
    this.youAreMe.dom.className = 'you-are-me-text-container';
    this.youAreMe.setTransition('1s');
    setTimeout(function(){
      this.youAreMe.dom.style.opacity = 1;
    }.bind(this),4000);

    this.letsBegin = new ItemText('Let\'s begin.');
    this.letsBegin.init();
    this.letsBegin.dom.className = 'lets-begin-text-container';
    this.letsBegin.setTransition('1s');
  };

  Song.prototype.hideOpeningText = function() {
    this.iAmYou.dom.style.opacity = 0;
    this.youAreMe.dom.style.opacity = 0;
    this.letsBegin.dom.style.opacity = 0;
  };

  Song.prototype.showLetsBegin = function() {

    this.letsBegin.dom.style.opacity = 1;
    AudioControls.show();
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

    this.hideOpeningText();

    this.audioControls.dom.className = 'top-left';
    this.audioControls.pauseBtn.className = this.audioControls.pauseBtn.baseClass + ' top-left';
    this.audioControls.playBtn.className = this.audioControls.playBtn.baseClass + ' top-left';
  };

  Song.prototype.openDoor = function() {
    this.stage.setTransition('5s',false,this.stage.overlay);
    this.backlitDoor.open();
    this.stage.overlay.style.opacity = 0;
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
