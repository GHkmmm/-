var Food;
var removeDiv;

(function(){
  var position = 'absolute'
  var elements = []

  Food = function(options){
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0; 
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = '#fff';
  }

  Food.prototype.render = function(map){
    removeDiv(elements);
    this.randomXY();
    var div = document.createElement('div');
    div.style.position = position;
    div.style.left = this.x * this.width + 'px';
    div.style.top = this.y * this.height + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    elements.push(div);
    map.appendChild(div);
  }

  Food.prototype.randomXY = function(){
    this.x = Tools.getRandom(0, 35);
    this.y = Tools.getRandom(0, 25);
  }

  removeDiv = function(elements){
    if(elements != []){
      for(var a = elements.length-1;a>=0;a--){
        elements[a].parentNode.removeChild(elements[a]);
        elements.pop()
      }
    }
  }
})()

// var food = new Food();
// food.randomXY();
// food.render();