let koko=15;
let korkeus=60;
let leveys=10;
let x=20;
let y=200-korkeus/2;

let x2=490;
let y2=200-korkeus/2;
let koko2=15;
let korkeus2=60;
let leveys2 =10;

let palloy =0;
let pallox =0;
let pallokoko = 20;
let nopeusx = 3;
let nopeusy = 1;
function setup() {
  createCanvas(600, 400);
palloy = height/2;
pallox = width/2;
}

function draw() {
  background(220);
  rect(x, y, leveys, korkeus);
  rect(x2, y2, leveys2, korkeus2);
  circle(pallox, palloy, pallokoko);
  fill('blue');
  liikutus();
  palloliike();
  collisionx();
  collisiony();
  collisionx2();
  collisionangle();
}

 function palloliike(){
   pallox+=nopeusx;
   palloy+=nopeusy;

 }



 function collisionx (){
  if (pallox>x2+20){
    nopeusx *=-1;
  }
 else if (pallox>x2-leveys&&palloy<(y2+korkeus2)&&palloy>(y2)){
  nopeusx *=-1;
 }
 
 }

 function collisionx2(){
 if (pallox<x20){
    nopeusx *=-1;
  }
  else if (pallox<leveys+x+pallokoko/2&&palloy<(y+korkeus)&&palloy>(y)){
   nopeusx *=-1;
  }
  }
   
  function collisionangle(){
  if((pallox<leveys+x+pallokoko/2&&palloy<(y+korkeus)&&palloy>y+korkeus)||(pallox<leveys+x+pallokoko/2&&palloy<(y+korkeus)&&palloy>(y))){
    nopeusy=nopeusy*5; 
  }
  }
 function collisiony(){
if (palloy>400){
 nopeusy*=-1;
}
 if (palloy<0){
  nopeusy*=-1;

 }
}
 function liikutus(){

   if (keyIsDown(UP_ARROW)&&y2>5){
    y2-=10;
   }
   if (keyIsDown(DOWN_ARROW)&&y2<height-korkeus2-5){
    y2+=10;
   }
   if (keyIsDown(87)&&y>5){
    y-=5;
   }
   if (keyIsDown(83)&&y<height-korkeus-5){
    y+=5;
   }
    



  
}

