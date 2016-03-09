//Configure paths
requirejs.config({
    baseUrl: '',
    paths: {
        core: '/core_components',
        project: '/project_components',
        songs: '/song_sequences',
        lib: '/lib',
        text: 'lib/requiretext/text.min'
    }
});

//Load library dependencies
requirejs([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min'
]);

//Load main controller
requirejs([
  'index'
]);
