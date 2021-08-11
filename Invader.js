class Invader{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50    
        this.InvaderImage = loadImage("Images/Invaders.png")
        this.debug =true
    }
    display(){
        push ()
        translate(this.x,this.y)
        imageMode(CENTER)
        image(this.InvaderImage ,0,0,this.width,this.height)
        pop ()
    }
}