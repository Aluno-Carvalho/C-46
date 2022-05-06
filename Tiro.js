class Tiro{
    constructor(x){
        this.image = loadImage("images/tiro.png");
        this.x = x;
        this.y;
    }

    show(){
        image(this.image, this.x, this.y, 100, 100);
    }
    
}