let koko=20;
let korkeus=60;
let leveys=10;
let x=20;
let y;  
let n=0;
let n2=0;
let x2;
let O = 10;
let y2;
let koko2=20;
let korkeus2=60;
let leveys2 =10;

let palloy;
let pallox;
let pallokoko = 20;
let nopeusx = 4;
let nopeusy=0;
let timer = 0;
let timer1 =0;

function setup() {
  createCanvas(1200, 700);
palloy = height/2;
pallox = width/2;

x2=width-20;
y=height/2-korkeus/2
y2=height/2-korkeus/2
nopeusy=random([-0.1, 0.1])
}


function draw() {
  background(220);
  fill('blue');
  rect(x, y, leveys, korkeus);
  fill('red');
  rect(x2, y2, leveys2, korkeus2,);
  circle(pallox, palloy, pallokoko);
  frameRate(120)
  liikutus();
  palloliike();
  collisionx();
  collisiony();
  collisionx2();
  collisionangle();
  pisteet();
  pistelasku();
  reset();
  if (timer > 0) timer -=1;
  if (timer1 > 0) timer1 -=1;

}

 function palloliike(){
   pallox+=nopeusx;
   palloy+=nopeusy;

 }



 function collisionx (){
 if (pallox>x2-pallokoko&&pallox<x2&&palloy<(y2+korkeus2+pallokoko/2)&&palloy>(y2-pallokoko/2)&&(timer<= 0)){
  nopeusx *=-1.1;
  timer = 20;
  
 }
 
 }
 

 function collisionx2(){
 if (pallox<x+pallokoko+leveys&&pallox>x+pallokoko/2&&palloy<(y+korkeus+pallokoko/2)&&palloy>(y-pallokoko/2)&&(timer1<=0)){
  nopeusx *=-1.1;
  timer1 = 20;
  }
  
  }

  function pistelasku(){
   if (pallox>width){
   n=n+1;
   }
   if (pallox<0)
   n2=n2+1;
  }

  function pisteet(){
  if (n>1||n<1){
    fill('blue');
  text(n+' pistettä', 10, 30);
  }
  else{
    fill('blue');
    text(n+' piste', 10, 30);
  }
  if (n2>1||n2<1){
    fill('red');
  text(n2+' pistettä', width-65, 30);
  }
  else{ 
    fill('red');
  text(n2+' piste', width-60, 30);
  }
  }
   
 
  function reset(){
   if (pallox<0||pallox>width){
   palloy=height/2;
   pallox=width/2;
   background(220);
   rect(x, y, leveys, korkeus);
   rect(x2, y2, leveys2, korkeus2);
   circle(pallox, palloy, pallokoko);
   noLoop()
   pisteet();
   liikutus();
   nopeusx=random ([-4, 4])
   nopeusy=random([-1, 1])
   
   
   setTimeout(()=>loop(),2000);
  
   }
  }  

  function collisionangle(){
    // palloosuu = pallo koskee mailaan, mailan eri osat, mihin kohtaan osuu
  let palloosuu = pallox<leveys+x+pallokoko;
  let mailanylaosa = palloy<(y+korkeus)&&palloy>y;
  let mailanalaosa = palloy>y&&palloy<y+korkeus/2;

  let palloosuu2 = pallox>x2-pallokoko&&pallox<x2&&palloy<(y2+korkeus2+pallokoko/2);
  let mailanylaosa2 = palloy<(y2+korkeus2)&&palloy>y2;
  let mailanalaosa2 = palloy>y2&&palloy<y2+korkeus2/2;


 
// vasen maila

 if (palloosuu&&mailanylaosa&&nopeusy>0){
      nopeusy=nopeusy+1.6;
 }
  
 if(palloosuu&&mailanalaosa&&nopeusy>0){
      nopeusy=nopeusy-1.6;
  }
  
 if(palloosuu&&mailanylaosa&&nopeusy<0){
      nopeusy=nopeusy+1.6;
  }
  
    if(palloosuu&&mailanalaosa&&nopeusy<0){
      nopeusy=nopeusy-1.6;
  }


  if(palloosuu&&mailanylaosa&&nopeusy>0){
    nopeusy=nopeusy+1.6;
  }

  if(palloosuu&&mailanalaosa&&nopeusy>0){
    nopeusy=nopeusy-1.6;
  }

  if(palloosuu&&mailanylaosa&&nopeusy<0){
    nopeusy=nopeusy+1.6;
  }

  if(palloosuu&&mailanalaosa&&nopeusy<0){
    nopeusy=nopeusy-1.6;
  }


  //oikea maila
  if(palloosuu2&&mailanylaosa2&&nopeusy>0){
   nopeusy=nopeusy+1.6;
  }

  if(palloosuu2&&mailanalaosa2&&nopeusy>0){
    nopeusy=nopeusy-1.6;
  }

  if(palloosuu2&&mailanylaosa2&&nopeusy<0){
   nopeusy=nopeusy+1.6;
  }

  if(palloosuu2&&mailanalaosa2&&nopeusy<0){
   nopeusy=nopeusy-1.6;
  }
  }


  function collisiony(){
 if (palloy>height-pallokoko/2){
 nopeusy*=-1;
}
 if (palloy<0){
 nopeusy*=-1;

 }
}
 

function mousePressed(){
  loop()
  nopeusy=random([-0.1, 0.1])

 }

 function liikutus(){

  if (keyIsDown(UP_ARROW)&&y2>5){
   y2-=10;
  }
  if (keyIsDown(DOWN_ARROW)&&y2<height-korkeus2-5){
   y2+=10;
  }
  if (keyIsDown(87)&&y>5){
   y-=10;
  }
  if (keyIsDown(83)&&y<height-korkeus-5){
   y+=10;
  }

}