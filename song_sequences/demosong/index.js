define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index',
  'core/ticker/index'
],function(SongSequence,BalloonHead,Stage,Ticker){

  var song = new SongSequence();

  song.audioPath = song.rootPath + 'demosong/demosong.mp3';
  song.title = 'Spacy Three Beat';
  song.bpm = 60;
  song.timeSignature = '3/4';

  song.addEvent('songLoaded',function(){
    song.play();

    Stage.cjs.addChild(BalloonHead);
    Stage.update();

    var colors = ['blue','purple','red','green'],
        bgColors = ['purple','red','green','blue'],
        i=0,
        size = 50;

    setInterval(function(){
      if (i >= colors.length) i = 0;
      BalloonHead.graphics.beginFill(colors[i]).drawCircle(0, 0, 100);
      Stage.update();

      document.body.style.backgroundColor = bgColors[i];

      i++;
    },333);

  });

  return song;
});
