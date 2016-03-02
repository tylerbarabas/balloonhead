var head = document.getElementById('head'),
page = document.body.getBoundingClientRect(),
pos = {
  top: (page.height/2) - (head.offsetHeight/2),
  left: (page.width/2) - (head.offsetWidth/2)
},
velocity = {};

var setHeadPos = function(x,y) {
  head.style.left = x+'px';
  head.style.top = y+'px';
};
setHeadPos(pos.left,pos.top);

var sizes = [
  'tiny',
  'small',
  'medium',
  'large',
  'xlarge'
];
var toggleHeadSize = function() {
  newClass = head.className;
  while (newClass === head.className) {
    var randomNumber = Math.floor(Math.random() * sizes.length-1)+1;
    newClass = sizes[randomNumber];
    console.log(newClass,randomNumber);
  }
  head.className = newClass;
};

head.style.opacity = 1;

velocity.top = 10;
velocity.left = 2;
createjs.Ticker.setInterval(25);
createjs.Ticker.addEventListener('tick',function(){
  if (pos.top + head.offsetHeight > page.height || pos.top < 0) {
    velocity.top *= -1;
    toggleHeadSize();
  }
  if (pos.left + head.offsetWidth > page.width || pos.left < 0) {
    velocity.left *= -1;
    // toggleHeadSize();
  }

  pos.top += velocity.top;
  pos.left += velocity.left;
  setHeadPos(pos.left,pos.top);
});
