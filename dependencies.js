//Configure paths
requirejs.config({
    baseUrl: '',
    paths: {
        core: '/core_components',
        project: '/project_components',
        songs: '/song_sequences',
        lib: '/lib',
        bower: '/bower_components',

        text: 'lib/requiretext/text.min',
        three: 'lib/three.js/build/three'
    }
});

//Load library dependencies
requirejs([
  'lib/tweenjs/lib/tweenjs-0.6.2.min',
  'lib/easeljs/lib/easeljs-0.8.2.min',
  'lib/soundjs/lib/soundjs-0.6.2.min',
  'lib/three.js/build/three',
  'bower/animejs/anime'
]);

//Load main controller
requirejs([
  'index'
]);
