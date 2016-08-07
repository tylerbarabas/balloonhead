define([
  'core/sequence/index',
  'text!songs/amazing_experience/instructions.json',
  'core/stage/index',
  'project/audio_controls/index',
  'project/item_text/index',
  'project/mouth/index'
],function(Sequence,Instructions,Stage,AudioControls,ItemText,Mouth){

  function SongSequence() {
    Sequence.call(this);
  }

  SongSequence.prototype = Object.create(Sequence.prototype);
  SongSequence.prototype.constructor = Sequence;

  SongSequence.prototype.init = function() {

    this.audioPath = this.rootPath + 'amazing_experience/snd/amazing_experience.mp3';
    this.title = 'amazing_experience';
    this.bpm = 105;
    this.timeSignature = '4/4';

    this.instructions = JSON.parse(Instructions);

    this.stage = Stage;
    this.audioControls = AudioControls;
    this.audioControls.init();

    this.showOpeningText();

    Sequence.prototype.init.call(this);
  };

  SongSequence.prototype.onFileLoad = function(evt) {

    this.showLetsBegin();

    Sequence.prototype.onFileLoad.call(this,evt);
  };

  SongSequence.prototype.showOpeningText = function() {
    this.iAmYou = new ItemText('Get ready for an');
    this.iAmYou.init();
    this.iAmYou.dom.className = 'i-am-you-text-container';
    this.iAmYou.setTransition('1s');
    setTimeout(function(){
      this.iAmYou.dom.style.opacity = 1;
    }.bind(this),500);

    this.youAreMe = new ItemText('amazing experience');
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

  SongSequence.prototype.hideOpeningText = function() {
    this.iAmYou.dom.style.opacity = 0;
    this.youAreMe.dom.style.opacity = 0;
    this.letsBegin.dom.style.opacity = 0;
  };

  SongSequence.prototype.showLetsBegin = function() {

    this.letsBegin.dom.style.opacity = 1;
    AudioControls.show();
  };

  SongSequence.prototype.audioControlsToCorner = function() {
    this.audioControls.setTransition('1s');
    this.audioControls.setTransition('1s',false,this.audioControls.playBtn);
    this.audioControls.setTransition('1s',false,this.audioControls.pauseBtn);

    this.hideOpeningText();

    this.audioControls.dom.className = 'top-left';
    this.audioControls.pauseBtn.className = this.audioControls.pauseBtn.baseClass + ' top-left';
    this.audioControls.playBtn.className =  this.audioControls.playBtn.baseClass + ' top-left';
  };

  SongSequence.prototype.showMouth = function() {

      this.mouth = new Mouth();

  };

  if (typeof window['song-'+SongSequence.title] === 'undefined') {
		window['song-'+SongSequence.title] = new SongSequence();
	}

	return window['song-'+SongSequence.title];

});
