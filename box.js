    
    class Box{
    constructor(x, y, w, h) {
    var options = {

    restitution :0.4,
    friction :0.0,


    }
    this.visibility = true;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    World.add(world, this.body);

    }
    display(){
      if(this.body.speed < 3) {  
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.width, this.height);
        pop();
      }
      else {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility)
        //image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
      }
    }
    }