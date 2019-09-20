export default class Ball{

    constructor(x,y,radius,dx,dy){
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
    }
    draw(c){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI*2,0,false);
        c.fillStyle="green";
        c.fill();
        c.stroke();
        
    }
    update(c){
        // if(this.radius+this.y>500){
        //     this.dy=-this.dy;
        // }else {
        //     this.dy=1;
        // }

        this.draw(c);
    }
    motion(dropCord,dy){
        
        if (this.x==600)
        {
            this.dy=dy
        }
        if(this.radius+this.y>500 ){
            this.dy=-this.dy;
            // console.log("insile"+dy);
        }
        // console.log(dy);
       
        this.y+=this.dy;       
        this.dx=-(600-dropCord.x)*Math.abs(this.dy)/150;   
        this.x+=this.dx;
    }
    collision(dist,ball_x){

    
        var score=0
        // alert("collsion")
        // console.log(this.y);
        if (dist<70)    //for 2 runs
        {

            // alert("2 runs");

            let  x= 995 - ball_x;
            this.dx= Math.sqrt(x*0.03);
            this.dy= Math.sqrt(x*0.2);
            console.log("ball speed",this.dx,this.dy);

            score= 2;


        }

        else if (dist<100)     // for 4 runs
        {
            // alert("4 runs");
            let  x=1280 - ball_x;
            this.dx= Math.sqrt(x*0.07);
            this.dy= Math.sqrt(x*0.2);
            console.log("ball speed",this.dx,this.dy);
            score= 4;
        }

        else
        {
            // alert("6 runs");
            let x=1460 - ball_x;
            this.dx= Math.sqrt(x*0.2);
            this.dy= Math.sqrt(x*1);
            console.log("ball speed",this.dx,this.dy);
            score= 6;
        }

          

        return score;
    }
    // score(){
    //     if(this.x>800 && this.x<1100){
    //         return 2;
    //     }else if(this.x>1100&& this.x<1450){
    //         return 4;
    //     }
    //     else if(this.x>1450){
    //         return 6;
    //     }
    // }

}