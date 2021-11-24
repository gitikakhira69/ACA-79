class SlingShot{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.sling = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.sling1 = loadImage("sprites/archery.png");
        this.sling2 = loadImage("sprites/sling2.png")
        Composite.add(world, this.sling);
    } 
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            console.log(this.sling.bodyA.position)
            push()
            stroke(42,22,8);
            if(pointA.x < 220){
                strokeWight(7);
                line(pointA.x - 20,pointA.y,pointB.x -10,pointB.y);
                line(pointA.x - 20,pointA.y,pointB.x +30,pointB.y-3);
                image(this.sling2,pointA.y,pointA.y-20,15,30);
            }
          else{
                 strokeWight(4);
                line(pointA.x + 25,pointA.y,pointB.x -10,pointB.y);
                line(pointA.x +25,pointA.y,pointB.x +30,pointB.y-3);
                image(this.sling2,pointA.x+20,pointA.y-20,15,30);    }
            pop()
        }
        image(this.sling1,40,450)
    }
}