export default class Drop{
    constructor(){};
    
    draw(c,x){
        c.beginPath();
        c.arc(x,496,5,Math.PI*2,0,false);
        c.fillStyle="red";
        c.fill();
        c.stroke();
        c.fillStyle="black";
    }
    update(c,x,y){
        this.draw(c,x);
    }
}