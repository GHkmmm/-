var position = "absolute"
var elements = []
var that

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
  that = this;
}

Snake.prototype.render = function(map){
  //移除上一次的所有元素
  if(elements != []){
    for(var a = elements.length-1;a>=0;a--){
      elements[a].parentNode.removeChild(elements[a]);
      elements.pop()
    }
  }
  
  for(var i=0;i<this.snakeItem.length;i++){
    var div = document.createElement('div');
    div.style.position = position;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.left = this.snakeItem[i].x * this.width + 'px'
    div.style.top = this.snakeItem[i].y * this.height + 'px'
    elements.push(div);
    map.appendChild(div);
  }
}

Snake.prototype.move = function(){
  
  switch(this.direction){
    case "right":
      for(var i = this.snakeItem.length-1;i>=0;i--){
        if(i == 0){
          this.snakeItem[0].x++;
        }else{
          this.snakeItem[i].x = this.snakeItem[i-1].x;
          this.snakeItem[i].y = this.snakeItem[i-1].y;
        }
      }
      break;
    case "left":
      for(var i = this.snakeItem.length-1;i>=0;i--){
        if(i == 0){
          this.snakeItem[0].x--;
        }else{
          this.snakeItem[i].x = this.snakeItem[i-1].x;
          this.snakeItem[i].y = this.snakeItem[i-1].y;
        }
      }
      break;
    case "top":
      for(var i = this.snakeItem.length-1;i>=0;i--){
        if(i == 0){
          this.snakeItem[0].y--;
        }else{
          this.snakeItem[i].x = this.snakeItem[i-1].x;
          this.snakeItem[i].y = this.snakeItem[i-1].y;
        }
      }
      break;
    case "bottom":
      for(var i = this.snakeItem.length-1;i>=0;i--){
        if(i == 0){
          this.snakeItem[0].y++;
        }else{
          this.snakeItem[i].x = this.snakeItem[i-1].x;
          this.snakeItem[i].y = this.snakeItem[i-1].y;
        }
      }
      break;
  }
}

document.onkeydown = function(e){
  switch(e.keyCode){
    case 37:
      that.direction = "left"
      break;
    case 38:
      that.direction = "top"
      break;
    case 39:
      that.direction = "right"
      break;
    case 40:
      that.direction = "bottom"
      break;
  }
}


//  测试代码
// var snake = new Snake();
// var timer = setInterval(function(){
//   if(that.snakeItem[0].x <= 0 || that.snakeItem[0].x+1 >= document.getElementById('map').offsetWidth/that.width || that.snakeItem[0].y <= 0 || that.snakeItem[0].y+1 >= document.getElementById('map').offsetHeight/that.width){
//     alert('ganme over');
//     clearInterval(timer);
//   }else{
//     snake.move();
//     snake.render();
//   }
// }, 150)