function Stage() {
  console.log('init stage');
  this.domElement = document.getElementById('content-stage');
  this.cjStage = new createjs.Stage("content-stage");
}

Stage.prototype = {
  update: function() {
    this.cjStage.update();
  }
};
