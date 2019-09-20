
export default class Bat {

    constructor(x,y,dx,dy,angle){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy
        this.angle=angle;
        // this.bat=document.getElementById("bat");
    }
    draw(c,img) {
        c.fillStyle="black";
        // c.fillRect(this.x,this.y,-10,118); 
        c.drawImage(img,this.x,this.y,20,118);
    }
    update(c,img){
        // this.x+=Math.cos(this.dx)*2;

        // this.dx+=0.1;
        // this.dy+=0.05;
        this.draw(c,img)
    }
    motion(c,img){
        // console.log(this.angle*180/Math.PI);
        if(this.angle<Math.PI/3){
            c.save();
            c.translate(100,380);
        
            c.rotate(-this.angle);
            // c.draw();
            // c.fillRect(0,0,-10,118);
            c.drawImage(img,0,0,20,118);
            this.angle+=0.035;
            console.log("rotaing angle of bat",(this.angle*180/Math.PI))
            // c.translate(-100,-380);
            c.restore();
      
        }
        else{
            c.save();
            c.translate(100,380);
             c.rotate(-Math.PI/3);
        // c.draw();
            // c.fillRect(0,0,-10,118);
            c.drawImage(img,0,0,20,118);
        // c.translate(-100,-380);
            c.restore();
            // console.log()
            
        }
        // console.log(this.angle*180/Math.PI);

    }
}
