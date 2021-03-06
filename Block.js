class Block{
    constructor(x,y,width,height){

      var options={
          restitution:0.4,
          friction:0.0,
          //isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    }
    display(){
        push();
        var pos=this.body.position;
       translate(pos.x,pos.y);
       rotate(angle);
       fill(rgb(3,252,194))
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}
