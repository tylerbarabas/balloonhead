define([
  'core/song_sequence/index',
  'project/balloon_head/index',
  'core/stage/index'
],function(SongSequence,BalloonHead,Stage){

  var song = new SongSequence();

  song.audioPath = 'path/to/audio';
  song.title = 'Techno Rampage';

  Stage.cjs.addChild(BalloonHead);
  Stage.update();

  var colors = ['lightgreen','green','darkgreen','green'],
  i=0,
  size = 50;
  setInterval(function(){
    if (i >= colors.length) i = 0;
    BalloonHead.graphics.beginFill(colors[i]).drawCircle(0, 0, 100);
    Stage.update();

    i++;
  },200);

  return song;
});
