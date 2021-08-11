class Hero{
    constructor(x,y){
        this.x = x
        this.y = y
        this.w = 200
        this.h = 200
        this.heroImage = loadImage("Images/SuperHero.png")
    }
    display(){
        translate(this.x,this.y);
        imageMode(CENTER)
        image (this.heroImage,0,0,this.w,this.h);
    }
}