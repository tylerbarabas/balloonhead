define(['three'],function(){

  function Cube() {
    this.init();
  }

  Cube.prototype = {
    init: function() {
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			this.mesh = new THREE.Mesh( geometry, material );
    },
    spin: function() {
      this.mesh.rotation.x += 0.05;
			this.mesh.rotation.y += 0.05;
    }
  };

  return Cube;

});
