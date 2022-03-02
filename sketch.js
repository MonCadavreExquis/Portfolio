var w;
var h;

var mX;
var mY;

var cw;
var can;
var myFont;

var landingPage;
var gone;
var myEyes;
var res = false;


var videoTime = true;
var video;
var videoButton;

var haiku;
var vismouvement;
var survole;
var mandala;
var virtuelle;

var retour;

var dansLettres = false;
var dansMouv = false;
var dansInter = false;
var dansBio = false;

//WINGS
var wingSpan;
var leftWing;
var leftWingLink;
var rightWing;
var rightWingLink;
var lWingX;
var rWingX;
var wingY;
var ang = 0;
var angle = 0;
const scalar = 0.3;
const speed = 3;

//LEGS
var legs;
var legsX;
var legsY;
var legsLink;

//TITLE
var cadavre;
var cadavreX;
var cadavreY;
var exquis;
var exquisX;
var exquisY;

//TAGS
var textTaille;
var lettresX;
var lettresY;
var mouvementX;
var mouvementY;
var interX;
var interY;
var bioX;
var bioY;

var bio = false;
var bioLink = false;
var lettres = false;
var movement = false;
var inter = false;

//FACE
var face;
var faceX;
var faceY;
var faceLink;
var faceMaxX;
var faceMaxY;

//GUTS
var guts;
var gutsX;
var gutsY;

//CHEST
var chest;
var chestX;
var chestY;
var chestLink;

//HEART
var heart;
var heartX;
var heartY;

//SIN MOVEMENT

var angleUD = 0;
const scalarUD = 40;
const speedUD = 3;
var UD;

//TEST MOUSEOVER
var back = 200;

//PRELOAD
function preload() {
  //FONT
  myFont = loadFont("font/SpaceMono-Bold.ttf")
  video = createVideo("Video de presentation.mp4");
   
  //DOM ELEMENTS
  cadavre = createImg("images_landing/cadavre.png", "Cadavre");
  exquis = createImg("images_landing/exquis.png", "Exquis");
   leftWing = createImg("images_landing/left_wing.png", "Left Wing");
  leftWingLink = createImg("images_landing/left_wing_link.png", "Left Wing");
  rightWing = createImg("images_landing/right_wing.png", "Right Wing");
  rightWingLink = createImg("images_landing/right_wing_link.png", "Right Wing");
   legs = createImg("images_landing/legs.gif", "Legs");
  legsLink = createImg("images_landing/legs_link.gif", "Legs");
 
 
  face = createImg("images_landing/face.png", "Face");
  faceLink = createImg("images_landing/face_link.png", "Face");
  chest = createImg("images_landing/chest_fused.png", "Chest");
  chestLink = createImg("images_landing/chest_fused_link.png", "Chest");
 

  cadavre.hide();
  exquis.hide();
  leftWing.hide();
  leftWingLink.hide();
  rightWing.hide();
  rightWingLink.hide();
  legs.hide();
  legsLink.hide();
  face.hide();
  faceLink.hide();
  chest.hide();
  chestLink.hide();
  // guts.hide();
  // heart.hide();
}

//SETUP
function setup() {
 
 mX = windowWidth*0.1;
 mY = windowHeight*0.1;
  //WINDOW
  w = windowWidth*0.8;
  h = windowHeight*0.8;
  cw = windowWidth*0.5;

  video.size(w*0.7,w*0.7*0.5625);
  video.volume(0);
  video.hide();
  
  //BUTTON
  retour = createButton("Retour");
  retour.mousePressed(retourFun);
  retour.position(mX+w*0.1,mY+w*0.01);
  retour.style("font-family", "Space Mono");
  retour.style("background-color", "#B4B0A0");
  retour.style("color", "#3F125E");  
  retour.hide();

  videoButton = createButton("Revoir la vidéo de présentation");
  videoButton.style("font-family", "Space Mono");
  videoButton.style("background-color", "#B4B0A0");
  videoButton.style("color", "#3F125E"); 
  videoButton.size(w*0.3,h*0.05);
  videoButton.style('font-size', w*0.013 + 'px');
  videoButton.mousePressed(showVideo);
   
  //LINKS
  haiku = createA("https://moncadavreexquis.github.io/Haiku/","Accéder","_blank")
  haiku.style("color", "#d40264");
  haiku.hide();
  
  survole = createA("https://moncadavreexquis.github.io/Survole-moi/", "Accéder", "_blank")
  survole.style("color", "#d40264");
  survole.hide();
  
  virtuelle = createA("Virtuelle.html", "Accéder", "_blank")
  virtuelle.style("color", "#d40264");
  virtuelle.hide();
  
  mandala = createA("https://moncadavreexquis.github.io/Mandala/", "Accéder", "_blank")
  mandala.style("color", "#d40264");
  mandala.hide();
  
  vismouvement = createA("https://moncadavreexquis.github.io/Mouvement/", "Accéder", "_blank")
  vismouvement.style("color", "#d40264");
  vismouvement.hide();

  //MODES
  imageMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER,BOTTOM);
  
  //TITLE
  cadavre.size(w * 0.35, w * 0.14);
  cadavreX = mX+w * 0.03;
  cadavreY = mY+h * 0.7;
  cadavre.position(cadavreX, cadavreY);
  exquis.size(w * 0.36, w * 0.14);
  exquisX = mX+w * 0.62;
  exquisY = mY+h * 0.7;
  exquis.position(exquisX, exquisY);


  //BODY

  //WINGS
  wingSpan = w * 0.28;

  leftWing.size(w * 0.22, w * 0.28);
  lWingX = mX+w * 0.5 - w * 0.22;
  wingY = mY+h * 0.57 - w * 0.28;
  leftWing.position(lWingX, wingY);
  
  leftWingLink.size(w * 0.22, w * 0.28);
  leftWingLink.position(lWingX, wingY);
  
  rightWing.size(w * 0.22, w * 0.28);
  rWingX = mX+w * 0.5;
  rightWing.position(rWingX, wingY);
  
  rightWingLink.size(w * 0.22, w * 0.28);
  rightWingLink.position(rWingX, wingY);

  //LEGS
  legs.size(w * 0.3, w * 0.3);
  legsX = mX+w * 0.5 - (w * 0.3) / 2;
  legsY = wingY + wingSpan * 0.65;
  legs.position(legsX, legsY);
  
  legsLink.size(w * 0.3, w * 0.3);
  legsLink.position(legsX, legsY);
  
  //FACE
  face.size(w * 0.12, w * 0.1);
  faceX = mX+w * 0.5 - (w * 0.12) / 2;
  faceY = wingY - wingSpan * 0.03;
  face.position(faceX, faceY);
  
  faceLink.position(faceX, faceY);
  faceLink.size(w * 0.12, w * 0.1);
  
  faceMaxX = faceX+w * 0.12;
  faceMaxY = faceY + w * 0.1;

  //CHEST
  chest.size(w * 0.13, w * 0.22);
  chestX = mX+w * 0.5 - (w * 0.13) / 2;
  chestY = wingY + wingSpan * 0.22;
  chest.position(chestX, chestY);
  
  chestLink.size(w * 0.13, w * 0.22);
  chestLink.position(chestX, chestY);



  
  
    //TAGS
textFont(myFont);
textTaille = w*0.03;

bioX = mX+w*0.25;
bioY = wingY + wingSpan;
lettresX =  mX+w*0.8;
lettresY = wingY + wingSpan * 0.2;
movementX = mX+w*0.75;
movementY = wingY + wingSpan;
interX = mX+w*0.25;
interY = wingY + wingSpan * 0.2;
  
  cadavre.show();
  exquis.show();
  
  leftWing.show();
  rightWing.show();
  legs.show();
  face.show();
  chest.show();

 

  //CANVAS
 createCanvas(w*1.5, h*1.5);

background(0);
  
  eyesSketch();
  }



function draw() {
  
  clear();

if(videoTime){
runVideo();
gone = true;
hiding();
videoTime = false;
} 
  
  if(!gone){
  sinMovement();
   mouseOverFun();
  mousePressedFun();
  }
  
  if(dansLettres){
    lettresFun();
  }
  
  if(dansBio){
    bioFun();
  }
    
  if(dansMouv){
    mouvFun();
  }
  
  if(dansInter){
    interFun();
  }

  //INTRO TEXT
 //  noStroke();
 //  fill(0);
 //  textSize(textTaille*0.7);
 //  textAlign(LEFT,TOP);
 // text("Survole, clique!",w*0.01,w*0.01);

}

showVideo = function(){
  videoTime = true;
}

stopVideo = function(){
  video.hide();
  retourFun();
}

runVideo = function(){
video.position(mX + w*0.15,mY+ h*0.20);
video.show();
video.play();
video.onended(stopVideo);
}

//HIDE LANDING PAGE
hiding = function(){
  
  gone = true;
  bio = false;
  lettres = false;
  movement = false;
  inter = false;
  
  //HIDE
  cadavre.hide();
  exquis.hide();
  leftWing.hide();
  leftWingLink.hide();
  rightWing.hide();
  rightWingLink.hide();
  legs.hide();
  legsLink.hide();
  face.hide();
  faceLink.hide();
  chest.hide();
  chestLink.hide();
  videoButton.hide();

}
retourFun = function(){
 gone = false; 
  dansLettres = false;
  dansBio = false;
  dansInter = false;
  dansMouv = false;
  
  //SHOW
  cadavre.show();
  exquis.show();
  leftWing.show();
  rightWing.show();
  legs.show();
  face.show();
  chest.show();
  
  haiku.hide();
  survole.hide();
  virtuelle.hide();
  mandala.hide();
  vismouvement.hide();
  retour.hide();
  videoButton.show();

  eyesSketch();
 
}


//MOVEMENT
sinMovement = function(){
  //SIN MOVEMENT
     UD = sin(angleUD)*scalarUD;
    angleUD+=speedUD;

  
    legs.position(legsX,legsY+UD);
  legsLink.position(legsX,legsY+UD);
    leftWing.position(lWingX,wingY+UD);
  leftWingLink.position(lWingX,wingY+UD);
    rightWing.position(rWingX,wingY+UD);
  rightWingLink.position(rWingX,wingY+UD);
  
       face.position(faceX,faceY+UD);
  faceLink.position(faceX,faceY+UD);
     chest.position(chestX,chestY+UD);
  chestLink.position(chestX,chestY+UD);
  
  


    //WING MOVEMENT
   leftWing.style("transform", "rotate("+ang+"rad)");
    leftWing.style("transform-origin", "center right");

    rightWing.style("transform", "rotate("+-ang+"rad)");
    rightWing.style("transform-origin", "center left")

  
       leftWingLink.style("transform", "rotate("+ang+"rad)");
    leftWingLink.style("transform-origin", "center right");

    rightWingLink.style("transform", "rotate("+-ang+"rad)");
    rightWingLink.style("transform-origin", "center left")

    ang=sin(angle)*scalar;
       angle+=speed;
  
  
 videoButton.position(mX+w*0.35,mY+h*0.98);

}


//MOUSEOVER
mouseOverFun = function(){
    //MOUSEOVER
  if(mouseX< faceMaxX && mouseX>faceX && mouseY < faceMaxY+UD && mouseY > faceY+UD){
    faceOver();
  }else{
    faceOut();
  }
  if (bio){
   
    fill(180, 176, 160);
    stroke(63, 18, 94);
strokeWeight(w*0.0031);
    line(bioX-8,bioY,cw,legsY+UD);
    textAlign(RIGHT,CENTER);
    textSize(textTaille); 
    strokeWeight(w*0.008);
text("Biologie",bioX,bioY);
}
   if (movement){
     fill(180, 176, 160);
    stroke(63, 18, 94);
strokeWeight(w*0.0031);
line(movementX,movementY,cw,wingY+wingSpan*0.8+UD);
     textAlign(LEFT,CENTER);
    textSize(textTaille); 
    strokeWeight(w*0.008);
text("Mouvement",movementX,movementY);
}
   if (lettres){
fill(180, 176, 160);
    stroke(63, 18, 94);
strokeWeight(w*0.0031);
//line(lettresX,lettresY,cw+w * 0.135,wingY+wingSpan*0.1+UD);
line(lettresX,lettresY,cw,wingY+wingSpan*0.5+UD);
     textAlign(LEFT,CENTER);
    textSize(textTaille); 
    strokeWeight(w*0.008);
text("Lettres",lettresX,lettresY);
  }
  if (inter){
   
    fill(180, 176, 160);
    stroke(63, 18, 94);
strokeWeight(w*0.0031);
    line(interX-8,interY,cw,interY+UD);
    textAlign(RIGHT,CENTER);
    textSize(textTaille); 
    strokeWeight(w*0.008);
text("Interactivité",interX,interY);
}
  
  //MOUSEOVER
  chest.mouseOver(chestOver);
  chestLink.mouseOut(chestOut);
  
  legs.mouseOver(legsOver);
  legsLink.mouseOut(legsOut);
  
  rightWing.mouseOver(wingsOver);
  leftWing.mouseOver(wingsOver);
  rightWingLink.mouseOut(wingsOut);
  leftWingLink.mouseOut(wingsOut);
}

chestOver = function(){
  if(!gone){
   bio = true;
  chest.hide();
chestLink.show();
  }
 }

chestOut = function(){
  if(!gone){
   bio = false;
    chestLink.hide();
  chest.show();
  }
}

legsOver = function(){
  if(!gone){
   movement = true;
  legs.hide();
  legsLink.show();
  }
}

legsOut = function(){
  if(!gone){
   movement = false;
  legsLink.hide();
  legs.show();
  }
}

wingsOver = function(){
  if(!gone){
   lettres = true;
  rightWing.hide();
  leftWing.hide();
  rightWingLink.show();
  leftWingLink.show();
  }
}

wingsOut = function(){
  if(!gone){
   lettres = false;
  rightWingLink.hide();
  leftWingLink.hide();
  rightWing.show();
  leftWing.show();
  }
}

faceOver = function(){
  if(!gone){
   inter = true;
  face.hide();
faceLink.show();
  }
}

faceOut = function(){
  if(!gone){
   inter = false;
faceLink.hide();
face.show();
  }
}


//MOUSEPRESSED
mousePressedFun = function(){
  leftWingLink.mousePressed(pressWings);
  rightWingLink.mousePressed(pressWings);
  chestLink.mousePressed(pressChest);
  legsLink.mousePressed(pressLegs);
  
  
    if(mouseX< faceMaxX && mouseX>faceX && mouseY < faceMaxY+UD && mouseY > faceY+UD && mouseIsPressed){
    pressFace();
    }
  
}

//LETTRES
pressWings = function(){
  hiding();
  dansLettres = true;
  }
lettresFun = function(){

   noStroke();
  fill(63, 18, 94);
  textSize(textTaille*1.5);
  textAlign(CENTER,TOP);
 text("Lettres",mX+w*0.5,mY+w*0.01);
  
  textSize(textTaille);
  textAlign(LEFT,TOP);
  text("Haiku par génération aléatoire",mX+w*0.17,mY+h*0.2);
  
  textSize(textTaille*0.7);
  text("Une structure, un rythme et des mots pour les remplir... Faire entrer l'aléatoire dans la poésie peut donner lieu à des combinaisons inattendues, voire étonnantes! Créé avec Twine et p5.js.",mX+w*0.26,mY+h*0.3, w*0.52,h);
  
  retour.show();
  retour.size(w*0.1,w*0.05);
  retour.style('font-size', w*0.025 + 'px');
  retour.position(mX+w*0.01,mY+w*0.01);
  
  
  haiku.position(mX+w*0.6,mY+w*0.1+h*0.37);
  haiku.style('font-size', w*0.025 + 'px');
  haiku.show();
}

//MOUVEMENT
pressLegs = function(){
  hiding();
  dansMouv = true;
}
mouvFun = function(){
   noStroke();
  fill(63, 18, 94);
  textSize(textTaille*1.5);
  textAlign(CENTER,TOP);
 text("Mouvement",mX+w*0.5,mY+w*0.01);
  
   textSize(textTaille);
  textAlign(LEFT,TOP);
  text("Visualiser le mouvement",mX+w*0.17,mY+h*0.2);
  
   textSize(textTaille*0.7);
  text("La danse est un art parfois géométrique. Le corps forme des trajectoires dans l'espace : des droites, des chemins, des courbes... Dans cette création, je voulais rendre plus tangible cette dimension cachée du mouvement. Créé avec p5.js.",mX+w*0.26,mY+h*0.3, w*0.52,h*0.8);
  
  vismouvement.position(mX+w*0.6,mY+w*0.1+h*0.48);
  vismouvement.style('font-size', w*0.025 + 'px');
  vismouvement.show();
  
    retour.show();
  retour.size(w*0.1,w*0.05);
  retour.style('font-size', w*0.025 + 'px');
  retour.position(mX+w*0.01,mY+w*0.01);
  
}

//BIOLOGIE
pressChest = function(){
  hiding();
  dansBio = true;
}
bioFun = function(){
   noStroke();
  fill(63, 18, 94);
  textSize(textTaille*1.5);
  textAlign(CENTER,TOP);
 text("Biologie",mX+w*0.5,mY+w*0.01);
  
   textSize(textTaille);
  textAlign(LEFT,TOP);
  text("Mandala cellulaire",mX+w*0.17,mY+h*0.2);
    textSize(textTaille*0.7);
  text("Dans ma vie professionnelle, je suis cytologiste : à longueur de journée, j’observe des cellules sous un microscope. Et comme elles sont belles! Pour qui regarde bien, la biologie est une artiste... Créé avec p5.js.",mX+w*0.26,mY+h*0.3, w*0.52,h*0.8);
  
  mandala.position(mX+w*0.6,mY+w*0.1+h*0.45);
  mandala.style('font-size', w*0.025 + 'px');
  mandala.show();
  
  
  retour.show();
  retour.size(w*0.1,w*0.05);
  retour.style('font-size', w*0.025 + 'px');
  retour.position(mX+w*0.01,mY+w*0.01);
  
}

//INTERACTIVITE
pressFace = function(){
  hiding();
  dansInter = true;
}
interFun = function(){
   noStroke();
  fill(63, 18, 94);
  textSize(textTaille*1.5);
  textAlign(CENTER,TOP);
 text("Interactivité",mX+w*0.5,mY+w*0.01);
  
   textSize(textTaille);
  textAlign(LEFT,TOP);
  text("Virtuelle",mX+w*0.17,mY+h*0.2);
  textSize(textTaille*0.7);
   text("Quand est-ce qu'une image cesse d'être passive? Un revirement de perspectives et d'attentes. Je choisis ce que je te donne à voir... Créé avec Twine.",mX+w*0.24,mY+h*0.3, w*0.54,h*0.8);
 virtuelle.position(mX+w*0.6,mY+w*0.1+h*0.32);
  virtuelle.style('font-size', w*0.025 + 'px');
  virtuelle.show();
  
  
   textSize(textTaille);
  textAlign(LEFT,TOP);
  text("Survole-moi",mX+w*0.17,mY+h*0.53);
  textSize(textTaille*0.7);
   text("Entre le corps et l’écran. Mon portrait réagit à ta souris : un corps virtuel, absent. Mes réponses programmées sont mon fantôme, mon image résiduelle... Un petit sketch créé avec p5.js.",mX+w*0.24,mY+h*0.63, w*0.54,h*0.8);
survole.position(mX+w*0.6,mY+w*0.1+h*0.67);
  survole.style('font-size', w*0.025 + 'px');
  survole.show();
  
  
  
    retour.show();
  retour.size(w*0.1,w*0.05);
  retour.style('font-size', w*0.025 + 'px');
  retour.position(mX+w*0.01,mY+w*0.01);
  
}

function windowResized() {
  
  mX = windowWidth*0.1;
 mY = windowHeight*0.05;
  //WINDOW
  w = windowWidth*0.8;
  h = windowHeight*0.8;
  cw = windowWidth*0.5;

  
  //TITLE
  cadavre.size(w * 0.35, w * 0.14);
  cadavreX = mX+w * 0.03;
  cadavreY = mY+h * 0.7;
  cadavre.position(cadavreX, cadavreY);
  exquis.size(w * 0.36, w * 0.14);
  exquisX = mX+w * 0.62;
  exquisY = mY+h * 0.7;
  exquis.position(exquisX, exquisY);


  //BODY

  //WINGS
  wingSpan = w * 0.28;

  leftWing.size(w * 0.22, w * 0.28);
  lWingX = mX+w * 0.5 - w * 0.22;
  wingY = mY+h * 0.57 - w * 0.28;
  leftWing.position(lWingX, wingY);
  
  leftWingLink.size(w * 0.22, w * 0.28);
  leftWingLink.position(lWingX, wingY);
  
  rightWing.size(w * 0.22, w * 0.28);
  rWingX = mX+w * 0.5;
  rightWing.position(rWingX, wingY);
  
  rightWingLink.size(w * 0.22, w * 0.28);
  rightWingLink.position(rWingX, wingY);

  //LEGS
  legs.size(w * 0.3, w * 0.3);
  legsX = mX+w * 0.5 - (w * 0.3) / 2;
  legsY = wingY + wingSpan * 0.65;
  legs.position(legsX, legsY);
  
  legsLink.size(w * 0.3, w * 0.3);
  legsLink.position(legsX, legsY);
  
  //FACE
  face.size(w * 0.12, w * 0.1);
  faceX = mX+w * 0.5 - (w * 0.12) / 2;
  faceY = wingY - wingSpan * 0.03;
  face.position(faceX, faceY);
  
  faceLink.position(faceX, faceY);
  faceLink.size(w * 0.12, w * 0.1);
  
  faceMaxX = faceX+w * 0.12;
  faceMaxY = faceY + w * 0.1;

  //CHEST
  chest.size(w * 0.13, w * 0.22);
  chestX = mX+w * 0.5 - (w * 0.13) / 2;
  chestY = wingY + wingSpan * 0.22;
  chest.position(chestX, chestY);
  
  chestLink.size(w * 0.13, w * 0.22);
  chestLink.position(chestX, chestY);

videoButton.size(w*0.3,h*0.05);
videoButton.position(mX+w*0.35,mY+h*0.98);
videoButton.style('font-size', w*0.013 + 'px'); 

video.size(w*0.7,w*0.7*0.5625);
video.position(mX + w*0.15,mY+ h*0.20);
  
    //TAGS
textFont(myFont);
textTaille = w*0.03;

bioX = mX+w*0.25;
bioY = wingY + wingSpan;
lettresX =  mX+w*0.8;
lettresY = wingY + wingSpan * 0.2;
movementX = mX+w*0.75;
movementY = wingY + wingSpan;
interX = mX+w*0.25;
interY = wingY + wingSpan * 0.2;
  

  resizeCanvas(windowWidth*1.5, windowHeight*1.5);
eyesSketch();
  
  
 
}
 

eyesSketch = function () {
 
  let sketchEyes = function (p) {
    //EYES
    let x0;
    let y0;
    let mouX0;
    let mouY0;

    let x1;
    let y1;
    let mouX1;
    let mouY1;

    let x2;
    let y2;
    let mouX2;
    let mouY2;

    let x3;
    let y3;
    let mouX3;
    let mouY3;

    let x4;
    let y4;
    let mouX4;
    let mouY4;

    let x5;
    let y5;
    let mouX5;
    let mouY5;

    let eyeWidth;
    let eyeHeight;
    let eyeSize;

    let stroky;

    let can;
let res = false;
    
    p.setup = function () {
      //CANVAS
      can = p.createCanvas(w * 0.12, w * 0.1);
      can.position(faceX, faceY);

      //VARIABLES
      stroky = w * 0.12 * 0.01;
      eyeWidth = w * 0.12 * 0.15;
      eyeHeight = w * 0.1 * 0.1;
      eyeSize = w * 0.12 * 0.04;

      x0 = p.width * 0.5;
      y0 = w * 0.1 * 0.53;

      x1 = p.width * 0.5;
      y1 = w * 0.1 * 0.3;

      x2 = p.width * 0.5 + w * 0.12 * 0.2;
      y2 = w * 0.1 * 0.42;

      x3 = p.width * 0.5 + w * 0.12 * 0.17;
      y3 = w * 0.1 * 0.67;

      x4 = p.width * 0.5 - w * 0.12 * 0.17;
      y4 = w * 0.1 * 0.67;

      x5 = p.width * 0.5 - w * 0.12 * 0.2;
      y5 = w * 0.1 * 0.42;
    };

    p.draw = function () {
      can.position(faceX, faceY+UD);
      p.clear();
     //EYE MOVEMENT
      mouX0 = map(mouseX, 0, width, x0 - eyeWidth * 0.3, x0 + eyeWidth * 0.3);
      mouX1 = map(mouseX, 0, width, x1 - eyeWidth * 0.3, x1 + eyeWidth * 0.3);
      mouX2 = map(mouseX, 0, width, x2 - eyeWidth * 0.3, x2 + eyeWidth * 0.3);
      mouX3 = map(mouseX, 0, width, x3 - eyeWidth * 0.3, x3 + eyeWidth * 0.3);
      mouX4 = map(mouseX, 0, width, x4 - eyeWidth * 0.3, x4 + eyeWidth * 0.3);
      mouX5 = map(mouseX, 0, width, x5 - eyeWidth * 0.3, x5 + eyeWidth * 0.3);

      mouY0 = map(
        mouseY,
        0,
        height,
        y0 - eyeHeight * 0.2,
        y0 + eyeHeight * 0.3
      );
      mouY1 = map(
        mouseY,
        0,
        height,
        y1 - eyeHeight * 0.2,
        y1 + eyeHeight * 0.3
      );
      mouY2 = map(
        mouseY,
        0,
        height,
        y2 - eyeHeight * 0.2,
        y2 + eyeHeight * 0.3
      );
      mouY3 = map(
        mouseY,
        0,
        height,
        y3 - eyeHeight * 0.2,
        y3 + eyeHeight * 0.3
      );
      mouY4 = map(
        mouseY,
        0,
        height,
        y4 - eyeHeight * 0.2,
        y4 + eyeHeight * 0.3
      );
      mouY5 = map(
        mouseY,
        0,
        height,
        y5 - eyeHeight * 0.2,
        y5 + eyeHeight * 0.3
      );

    
      p.noFill();
      p.stroke(222, 183, 203);
      p.strokeWeight(stroky);
      p.ellipse(x0, y0, eyeWidth, eyeHeight);
      p.ellipse(x1, y1, eyeWidth, eyeHeight);
      p.ellipse(x2, y2, eyeWidth, eyeHeight);
      p.ellipse(x3, y3, eyeWidth, eyeHeight);
      p.ellipse(x4, y4, eyeWidth, eyeHeight);
      p.ellipse(x5, y5, eyeWidth, eyeHeight);

      p.fill(222, 183, 203);
      p.noStroke();
      p.ellipse(mouX0, mouY0, eyeSize, eyeSize);
      p.ellipse(mouX1, mouY1, eyeSize, eyeSize);
      p.ellipse(mouX2, mouY2, eyeSize, eyeSize);
      p.ellipse(mouX3, mouY3, eyeSize, eyeSize);
      p.ellipse(mouX4, mouY4, eyeSize, eyeSize);
      p.ellipse(mouX5, mouY5, eyeSize, eyeSize);
      
       if(gone){
  can.remove();
}
};
    
  p.windowResized = function(){

    p.resizeCanvas(w * 0.12, w * 0.1);
      //VARIABLES
      stroky = w * 0.12 * 0.01;
      eyeWidth = w * 0.12 * 0.15;
      eyeHeight = w * 0.1 * 0.1;
      eyeSize = w * 0.12 * 0.04;
    
     p.strokeWeight(stroky);

      x0 = p.width * 0.5;
      y0 = w * 0.1 * 0.53;

      x1 = p.width * 0.5;
      y1 = w * 0.1 * 0.3;

      x2 = p.width * 0.5 + w * 0.12 * 0.2;
      y2 = w * 0.1 * 0.42;

      x3 = p.width * 0.5 + w * 0.12 * 0.17;
      y3 = w * 0.1 * 0.67;

      x4 = p.width * 0.5 - w * 0.12 * 0.17;
      y4 = w * 0.1 * 0.67;

      x5 = p.width * 0.5 - w * 0.12 * 0.2;
      y5 = w * 0.1 * 0.42;
    
  }
  };

  let myEyes = new p5(sketchEyes);
  
 

};
