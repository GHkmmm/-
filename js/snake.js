var position = "absolute"

function Snake(options){
  options = options || {}
  this.snakeItem = [
    {x: 3, y: 2},
    {x: 2, y: 2},
    {x: 1, y: 2}
  ]
  this.width = options.width || 20
  this.height = options.height || 20
  this.color = options.color || "#fff"
  this.direction = "right"
}

Snake.prototype.render = function(){
  var map = document.getElementById('map');
  for(var i=0;i<=3;i++){
    var div = document.createElement('div');
    div.style.position = position;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.left = this.snakeItem[i].x * this.width + 'px'
    div.style.top = this.snakeItem[i].y * this.height + 'px'
    map.appendChild(div);
  }
}

var snake = new Snake();
snake.render();