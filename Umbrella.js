class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadImage("Walking Frame/walking_1.png")
        this.umbrella = Bodies.circle(x,y,170,option);
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,200,500);
 

    }
}