define([
  'core/sequence/index',
  'text!songs/intro/instructions.json',
  'core_components/three_stage/index',
  'project_components/cube/index'
],function(Sequence,Instructions,ThreeStage,Cube){

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

    this.cube = new Cube();

    Sequence.prototype.init.call(this);
  };

  Song.prototype.onFileLoad = function(evt) {
    this.play();
    Sequence.prototype.onFileLoad.call(this,evt);
  };

  Song.prototype.addCube = function() {
    ThreeStage.scene.add(this.cube.mesh);
  };

  Song.prototype.spinCube = function() {
    ThreeStage.renderFuncs.push(this.cube.spin.bind(this.cube));
  };

  Song.prototype.stopCube = function() {
    ThreeStage.renderFuncs = [];
  };

  if (typeof window['song-'+Song.title] === 'undefined') {
		window['song-'+Song.title] = new Song();
	}

	return window['song-'+Song.title];

});
