define([
  'core/sequence/index',
  'text!songs/everything_vibrates/instructions.json',
  'core/stage/index',
  'project/audio_controls/index',
  'project/bbstump/index',
  'project/mouth/index',
  'project/titleScreen/index',
],function(Sequence,Instructions,Stage,AudioControls,BBStump,Mouth,TitleScreen){

  function EverythingVibrates() {
    Sequence.call(this);
  }

  EverythingVibrates.prototype = Object.create(Sequence.prototype);
  EverythingVibrates.prototype.constructor = Sequence;

  EverythingVibrates.prototype.init = function() {

    this.audioPath = this.rootPath + 'everything_vibrates/snd/ev.wav';
    this.title = 'Everything Vibrates';
    this.bpm = 105;
    this.timeSignature = '4/4';

    this.instructions = JSON.parse(Instructions);

    this.stage = Stage;
    this.audioControls = AudioControls;
    this.audioControls.init();

    this.bbstump = new BBStump();
    this.bbstump.init();
    this.bbstump.changeSprite('idle');

    this.mouth = new Mouth();
    this.mouth.init();
    this.mouth.changeSprite('idle');

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
    this.mouth.changeSprite('ramble');

/*    var can = document.getElementById('content-canvas');
    h = parseInt(can.getAttribute("height"));
    w=parseInt(can.getAttribute("width"));

    // get it's context
    hdc = can.getContext('2d');

    hdc.strokeStyle = 'red';
    hdc.lineWidth = 2;

    // Fill the path
    hdc.fillStyle = "#000";
    hdc.fillRect(0,0,w,h);
*/
  };

  EverythingVibrates.prototype.showTitleScreen = function(){

    this.titleScreen = new TitleScreen('...because we are all <u>one</u>.');

      this.titleScreen.show();
      setTimeout(()=>{
        this.titleScreen.hide();
      }, 7000);
  };

  EverythingVibrates.prototype.drawLine = function(){
    var canvas = document.getElementById('content-canvas'),
        ctx = canvas.getContext('2d');

    console.log('drawline');
  };

  EverythingVibrates.prototype.particles = function(){
    var   canvas = document.querySelector('canvas'),
             ctx = canvas.getContext('2d'),
       particles = [],
    patriclesNum = 500,
               w = 500,
               h = 500,
          colors = ['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b'];
     
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.left = (window.innerWidth - 500)/2+'px';

    if(window.innerHeight>500)
    canvas.style.top = (window.innerHeight - 500)/2+'px';
      
    function Factory(){  
      this.x =  Math.round( Math.random() * w);
      this.y =  Math.round( Math.random() * h);
      this.rad = Math.round( Math.random() * 1) + 1;
      this.rgba = colors[ Math.round( Math.random() * 3) ];
      this.vx = Math.round( Math.random() * 3) - 1.5;
      this.vy = Math.round( Math.random() * 3) - 1.5;
    }
       
    function draw(){
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for(var i = 0;i < patriclesNum; i++){
        var temp = particles[i];
        var factor = 1;
         
        for(var j = 0; j<patriclesNum; j++){
          
           var temp2 = particles[j];
           ctx.linewidth = 0.5;
          
           if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
              ctx.strokeStyle = temp.rgba;
              ctx.beginPath();
              ctx.moveTo(temp.x, temp.y);
              ctx.lineTo(temp2.x, temp2.y);
              ctx.stroke();
              factor++;
           }
        }
        
        
        ctx.fillStyle = temp.rgba;
        ctx.strokeStyle = temp.rgba;
        
        ctx.beginPath();
        ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.closePath();
        

        temp.x += temp.vx;
        temp.y += temp.vy;
        
        if(temp.x > w)temp.x = 0;
        if(temp.x < 0)temp.x = w;
        if(temp.y > h)temp.y = 0;
        if(temp.y < 0)temp.y = h;
      }
    }

    function findDistance(p1,p2){  
      return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
    }

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    (function init(){
      for(var i = 0; i < patriclesNum; i++){
        particles.push(new Factory);
      }
    })();

    (function loop(){
      draw();
      requestAnimFrame(loop);
    })();

  };

  if (typeof window['song-'+EverythingVibrates.title] === 'undefined') {
		window['song-'+EverythingVibrates.title] = new EverythingVibrates();
	}

	return window['song-'+EverythingVibrates.title];

});
