function Rat(x, y) {
  var height = y;
  var width = x;
  
  this.currentX = x;
  this.currentY = y;
  this.prevDir = "stop";

  this.show = function() {
    fill(255,0,0);
    rect(this.currentX, this.currentY, 20, 20);
  }

  this.update = function() { // change to BFS or some other algorithm lol
    if (this.currentX > width || this.currentY > height || this.currentX < 0 || this.currentY < 0) {
        this.currentX = width/2;
        this.currentY = height/2;
        return;
    }

    var xory = ["up", "right", "left", "down"];
    var direction = xory[Math.floor(Math.random() * xory.length)];

    if (direction == "up" && this.prevDir != "down") {
        this.currentY -= 20;
        this.prevDir = "up";
    } else if (direction == "right" && this.prevDir != "left") {
        this.currentX += 20;
        this.prevDir = "right";
    } else if (direction == "down" && this.prevDir != "up") {
        this.currentY += 20;
        this.prevDir = "down";
    } else if (direction == "left" && this.prevDir != "right") {
        this.currentX -= 20;  
        this.prevDir = "left";
    }
  }
}