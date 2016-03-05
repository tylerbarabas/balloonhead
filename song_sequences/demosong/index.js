define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index'
],function(SongSequence,BalloonHead,Stage){

  var song = new SongSequence();

  song.audioPath = song.rootPath + 'demosong/demosong.mp3';
  song.title = 'Spacy Three Beat';
  song.bpm = 60;
  song.timeSignature = '4/4';

  song.addEvent('songLoaded',function(){
    song.play();
  });

  // Stage.cjs.addChild(BalloonHead);
  // Stage.update();

  // var colors = ['lightgreen','green','darkgreen','green'],
  // i=0,
  // size = 50;
  // createjs.Ticker.addEventListener("tick",tick);
  // function tick() {
    // if (i >= colors.length) i = 0;
    // BalloonHead.graphics.beginFill(colors[i]).drawCircle(0, 0, 100);
    // Stage.update();
    //
    // i++;
  // }

  return song;
});
