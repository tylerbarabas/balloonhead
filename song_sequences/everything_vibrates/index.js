define([
  'core/sequence/index',
  'text!songs/everything_vibrates/instructions.json',
  'core/stage/index',
  'project/audio_controls/index',
  'project/item_text/index',
  'project/bbstump/index'
],function(Sequence,Instructions,Stage,AudioControls,ItemText,BBStump){

  function EverythingVibrates() {
    Sequence.call(this);
  }

  EverythingVibrates.prototype = Object.create(Sequence.prototype);
  EverythingVibrates.prototype.constructor = Sequence;

  EverythingVibrates.prototype.init = function() {

    this.audioPath = this.rootPath + 'everything_vibrates/snd/amazing_experience.mp3';
    this.title = 'amazing_experience';
    this.bpm = 105;
    this.timeSignature = '4/4';

    this.instructions = JSON.parse(Instructions);

    this.stage = Stage;
    this.audioControls = AudioControls;
    this.audioControls.init();

    this.bbstump = new BBStump();
    this.bbstump.init();

    Sequence.prototype.init.call(this);
  };

  EverythingVibrates.prototype.onFileLoad = function(evt) {

    this.audioControls.show();
    Sequence.prototype.onFileLoad.call(this,evt);

  };

  EverythingVibrates.prototype.audioControlsToCorner = function() {
    this.audioControls.setTransition('1s');
    this.audioControls.setTransition('1s',false,this.audioControls.playBtn);
    this.audioControls.setTransition('1s',false,this.audioControls.pauseBtn);

    this.audioControls.dom.className = 'top-left';
    this.audioControls.pauseBtn.className = this.audioControls.pauseBtn.baseClass + ' top-left';
    this.audioControls.playBtn.className =  this.audioControls.playBtn.baseClass + ' top-left';
  };

  EverythingVibrates.prototype.startStumpAnim = function() {
    this.bbstump.changeSprite('ramble');
  };

  if (typeof window['song-'+EverythingVibrates.title] === 'undefined') {
		window['song-'+EverythingVibrates.title] = new EverythingVibrates();
	}

	return window['song-'+EverythingVibrates.title];

});
