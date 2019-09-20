import  Bat  from "./Bat.js";
import Ball from "./Ball.js";
import Drop from "./DropPoint.js";
// var p1Score=document.getElementById("p1Score");
// var p2Score=document.getElementById("p2Score");
var img=document.querySelector("img");
var canvas = document.querySelector("canvas");
var batImage=document.querySelector("#bat");
var batsman=document.querySelector("#batsman");
var bowler=document.querySelector("#bowler");
canvas.width=1500;
// var image=new Image();
var noOfBall=12;
// image.src="https://www.google.com/search?q=unsplash&rlz=1C1CHBF_enIN842IN847&sxsrf=ACYBGNRi4Rs4w1eCI04PPfNlxVn2i_rp5g:1568995347231&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjbss2S49_kAhXYfisKHU5AC0YQ_AUIEigB&biw=1536&bih=754#";
var p1=0;
var p2=0;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");

var dropCord={
    x:0,
    y:0,
    times:0
}
var ball=new Ball(600,350,8,1,1);
var bat=new Bat(100,380,4,1,0);
var mouse={
    x:0,
    y:0
}
var flag=0;
var flag3=0;
window.addEventListener("click",(event)=>{
    dropCord.x=event.x;
    dropCord.y=495;
    dropCord.times=Math.floor(Math.random() * (8 - 3) ) + 3;
    flag3=1;
    noOfBall-=1;

});
window.addEventListener("keypress",(event)=>{   
    // console.log("got a key");
    if(event.keyCode==98 || event.keyCode==32){
        flag=1;
        console.log("b");
    }
});
var drop = new Drop();

var flag2=0;
var dy=0;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1500,window.innerHeight);
    c.drawImage(img,0,0,1500,500);
    c.drawImage(batsman,59,250);
    c.drawImage(bowler,540,287);
    if(flag==0){
        bat.update(c,batImage);
    }   
    ball.update(c);
    c.fillStyle="black";
    c.fillRect(0,500,1500,300);
    if(mouse.x<310){
        drop.update(c,mouse.x);
    }
    window.addEventListener('mousemove',(event)=>{
        mouse.x=event.x;
    });
    if(flag==1){
        bat.motion(c,batImage);
        // c.restore();
        var del_ang=0.15;
        var dist=Math.sqrt(Math.pow(bat.x-ball.x,2)+Math.pow(bat.y-ball.y,2))
       
        var ang =  Math.abs( Math.atan((ball.y-bat.y)/(ball.x-bat.x)));
        var bat_ang= (Math.PI/2)-bat.angle
        // console.log(Math.atan((ball.y-bat.y)/(ball.x-bat.x)));
        // console.log("ball ",ang);
        // console.log("bat ",bat.angle*180/Math.PI);
        // console.log("ball", ang*180/Math.PI)
        // console.log("dist",dist);
        // console.log("del_angle",bat.angle-ang);
        if( dist<110 && Math.abs(bat_ang-ang)<del_ang && bat.x<ball.x){
            flag3=2;
            // alert("collision");
           p1+= ball.collision(dist,ball.x);
           dy=ball.dy;
        }

       
    }
    if (flag3==2)
    {   
        
        console.log("ball speed in main",ball.dx,ball.dy);
        ball.x+=ball.dx; 
        ball.y-=dy-0.1*(ball.dy) ;
        dy*=0.9;
        if (ball.y>=490 || ball.x>1500 || ball.x<4)
        {
            
            ball.dx=0;
            ball.dy=0;
            dy=0;
        }
    }
    if( flag3==1 && mouse.x<310){
        ball.motion(dropCord,1*dropCord.times);
    }
    // p1+=ball.score();
    c.fillRect(800,490,20,10);
    c.fillRect(1100,490,20,10);
    c.fillRect(1450,490,20,10);
    c.font="20px Arial";
    c.fillText("2",805,480);
    c.fillText("4",1105,480);
    c.fillText("6",1455,480);
    // p1Score.textContent=p1;
    c.font="50px Arial";
    c.fillStyle="black";
    c.fillText("Score : "+p1,20,70);
    // c.fillText("Player2 : "+p2,20,120);
    c.font="70px Arial";
    c.fillStyle="black";
    c.fillText("Balls : " +noOfBall,1150,70);
    
    if(ball.dx==0 && ball.dy==0 && ball.x!=600 && ball.y!=350 || ball.x<4){
        window.setTimeout(function(){
            ball.x=600;
            ball.y=350;
            flag=0;
            flag2=0;
            flag3=0;
            bat.angle=Math.PI/180;
        },100);
    }
 
    setTimeout(function(){
        if(noOfBall==0){
            alert("Your Score is  "+p1);
            document.location.reload();
            noOfBall=12;
        }
    },5000)

    // console.log(flag);
}

animate();