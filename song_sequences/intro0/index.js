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

    this.balloonHead = new BalloonHead();
    this.balloonHead.style('top','250px');
    this.balloonHead.style('left','1200px');
    this.balloonHead.style('opacity','0');
    this.balloonHead.style('transform','rotate(-10deg)');
    this.balloonHead.init();


    this.showOpeningText();

    Sequence.prototype.init.call(this);
  };

  Song.prototype.onFileLoad = function(evt) {

    this.showLetsBegin();

    Sequence.prototype.onFileLoad.call(this,evt);
  };

  Song.prototype.showOpeningText = function() {
    this.iAmYou = new ItemText('Fuck bitches');
    this.iAmYou.init();
    this.iAmYou.dom.className = 'i-am-you-text-container';
    this.iAmYou.setTransition('1s');
    setTimeout(function(){
      this.iAmYou.dom.style.opacity = 1;
    }.bind(this),500);

    this.youAreMe = new ItemText('Get money');
    this.youAreMe.init();
    this.youAreMe.dom.className = 'you-are-me-text-container';
    this.youAreMe.setTransition('1s');
    setTimeout(function(){
      this.youAreMe.dom.style.opacity = 1;
    }.bind(this),2000);

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

  Song.prototype.walkIn = function () {
      this.balloonHead.style('opacity',1);
      setTimeout(function(){
        this.balloonHead.setTransition('all 1s');
        this.balloonHead.moveTo('930px','250px');
      }.bind(this),50);
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
    this.backlitDoor.setTransition('2s',true);

    this.backlitDoor.open();
    this.stage.overlay.style.opacity = 0;
  };

  Song.prototype.closeDoor = function() {
    this.backlitDoor.close();
    this.stage.overlay.style.opacity = 0.9;
  };

  Song.prototype.walkOut = function() {
    this.balloonHead.style('transform','rotateY(180deg)');

    setTimeout(function(){
      this.balloonHead.moveTo('1200px','250px');
      this.balloonHead.style('opacity',0);
    }.bind(this),350);
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
