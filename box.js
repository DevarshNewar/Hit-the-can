    
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
    }