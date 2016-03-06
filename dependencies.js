//Configure paths
requirejs.config({
    baseUrl: '',
    paths: {
        core: '/core_components',
        project: '/project_components',
        songs: '/song_sequences',
        lib: '/lib',
    }
});

//Load library dependencies
requirejs([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
]);

//Load core dependencies
requirejs([
  'core/stage/index',
  'core/ticker/index',
  'core/song_sequence/index'
]);

//Load project dependencies
requirejs([
  'project/balloon_head/index'
]);

//Load song-controllers
requirejs([
  'songs/demosong/index'
]);

//Load main controller
requirejs([
  'index'
]);
