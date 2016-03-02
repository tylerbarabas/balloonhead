//Configure paths
requirejs.config({
    baseUrl: 'lib',
    paths: {
        core: '../core_components',
        project: '../project_components',
        controllers: '../controllers'
    }
});

//Library dependencies
requirejs([
  'tweenjs/lib/tweenjs-0.6.2.min', 
  'easeljs/lib/easeljs-0.8.2.min',
  'soundjs/lib/soundjs-0.6.2.min'
]);

//Core dependencies
requirejs([
  'core/stage/index'
]);

//Project dependencies
requirejs([
  'project/balloon_head/index'
]);

//Controllers
requirejs([
  'controllers/song1'
]);
