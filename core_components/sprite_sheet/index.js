define([
  'core/item/index',
  'project/audio_controls/index',
],function(Item,AudioControls){

  function SpriteSheet() {
    this.dom = document.createElement('canvas');
  }

  SpriteSheet.prototype = Object.create(Item.prototype);
  SpriteSheet.prototype.constructor = Item;

  SpriteSheet.prototype.init = function() {
      if (typeof this.json !== 'object') {
        console.log('Cannot init sprite sheet. No JSON present.');
        return;
      }

      this.spritesheet = new createjs.SpriteSheet(this.json);
      this.stage = new createjs.Stage(this.dom);

      this.dom.height = this.json.frames.height;
			this.dom.width = this.json.frames.width;

      createjs.Ticker.timingMode = createjs.Ticker.RAF;
			createjs.Ticker.addEventListener("tick", this.stage);

      this.audioControls = AudioControls;
      this.audioControls.addEvent('pause-btn',this.changeSprite.bind(this,'idle'));

      Item.prototype.init.call(this);
    };


    SpriteSheet.prototype.changeSprite = function (seq) {
			if (typeof seq != 'string') return;
			if (this.currentAnim == seq) return;

			if (this.stage !== null) this.stage.removeChild(this.animation);

			this.currentAnim = seq;
			this.animation = new createjs.Sprite(this.spritesheet, this.currentAnim);

			this.stage.addChild(this.animation);
		};

  return SpriteSheet;

});
