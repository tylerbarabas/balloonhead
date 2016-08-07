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

    this.mouth = new Mouth();
    this.mouth.init();
    this.mouth.style('left','40%');
    // this.mouth.setTransition('100ms');

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
    this.stage.hideOverlay();

    this.audioControls.dom.className = 'top-left';
    this.audioControls.pauseBtn.className = this.audioControls.pauseBtn.baseClass + ' top-left';
    this.audioControls.playBtn.className =  this.audioControls.playBtn.baseClass + ' top-left';
  };

  SongSequence.prototype.mouthStill = function() {
      this.mouth.changeSprite('idle');
      this.mouthMove();
      this.mouthRotate();
  };

  SongSequence.prototype.mouthTwitch = function() {
      this.mouth.changeSprite('twitch');
      this.mouthMove();
      this.mouthRotate();
  };

  SongSequence.prototype.mouthRamble = function(){
      this.mouth.changeSprite('ramble');
      this.mouthMove();
      this.mouthRotate();
  };

  SongSequence.prototype.colorChange = function(){
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  };

  SongSequence.prototype.mouthMove = function(){
    var xRange = {low: 0, high: 70},
        rand1 = Math.floor(Math.random()*(xRange.high-xRange.low+1)+xRange.low),
        yRange = {low: 0, high: 40},
        rand2 = Math.floor(Math.random()*(yRange.high-yRange.low+1)+yRange.low);

    this.mouth.moveTo(rand1+'%',rand2+'%');
  };

  SongSequence.prototype.mouthRotate = function() {
    var range = {low: 0, high: 360},
        rand = Math.floor(Math.random()*(range.high-range.low+1)+range.low);

    this.mouth.style('transform','rotate('+rand+'deg)');
  };

  if (typeof window['song-'+SongSequence.title] === 'undefined') {
		window['song-'+SongSequence.title] = new SongSequence();
	}

	return window['song-'+SongSequence.title];

});
