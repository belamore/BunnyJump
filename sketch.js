let player;
let coin;
let platform;
let enemy;
let winplatform;
let enemySpeed = 2;
let mushroom;
let sign;
let state = 0;
let score = 0;
let bg;
let font;

function preload() {
  font = loadFont('8bitOperatorPlus-Regular.ttf');

}

function setup() {
  bg = loadImage('pixel background-2.png');
  new Canvas(1050, 550);

  world.gravity.y = 17;
  
  player = new Sprite();
  player.img = "pinkbunny.png";
  player.width = 35;
  player.height = 73;
  player.x = 100;
  player.y = 537;
  player.mass = 3;
  player.hp = 100;
  player.dmgWindow = 5;
  true;
  player.rotationLock = true;
  player.friction = 0;

 // wall = new Sprite();
 // wall.w = 50;
 // wall.h = 200;
 // wall.color = "orange";
 // wall.x = 500;
 // wall.y = height / 2;
 // wall.collider = "static";

  coin = new Sprite();
  coin.img = "carrotcoin.png";
  coin.x = 1965;
  coin.y = 245;
  coin.diameter = 20;
  coin.collider = "static";
  
  coin2 = new Sprite();
  coin2.img = "carrotcoin.png";
  coin2.x = 1000;
  coin2.y = 100;
  coin2.diameter = 20;
  coin2.collider = "static";

  coin3 = new Sprite();
  coin3.img = "carrotcoin.png";
  coin3.x = 2800;
  coin3.y = 350;
  coin3.diameter = 20;
  coin3.collider = "static";

  coin4 = new Sprite();
  coin4.img = "carrotcoin.png";
  coin4.x = 4100;
  coin4.y = 50;
  coin4.diameter = 20;
  coin4.collider = "static";

  coin5 = new Sprite();
  coin5.img = "carrotcoin.png";
  coin5.x = 4600;
  coin5.y = 25;
  coin5.diameter = 20;
  coin5.collider = "static";

  //floor
  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 0
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 820
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 1640
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 2000
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 2800
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 3200
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 4000
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 4800
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 5200
  platform.y = 630;
  platform.collider = "static";

  platform = new Sprite();
  platform.img = "pixel ground.png";
  platform.color = "green";
  platform.w = 3000;
  platform.h = 110;
  platform.x = 6000
  platform.y = 630;
  platform.collider = "static";
  
  //platforms
  platform2 = new Sprite();
  platform2.img = "grassplatform.png";
  platform2.color = "purple";
  platform2.w = 150;
  platform2.h = 30;
  platform2.x = 300;
  platform2.y = 510;
  platform2.collider = "static";

  platform3 = new Sprite();
  platform3.img = "grassplatform.png";
  platform3.color = "purple";
  platform3.w = 150;
  platform3.h = 30;
  platform3.x = 450;
  platform3.y = 420;
  platform3.collider = "static";
  
  platform4 = new Sprite();
  platform4.img = "grassplatform.png";
  platform4.color = "purple";
  platform4.w = 150;
  platform4.h = 30;
  platform4.x = 600;
  platform4.y = 330;
  platform4.collider = "static";
  
  platform5 = new Sprite();
  platform5.img = "grassplatform.png";
  platform5.color = "purple";
  platform5.w = 150;
  platform5.h = 30;
  platform5.x = 720;
  platform5.y = 420;
  platform5.collider = "static";
  
  platform6 = new Sprite();
  platform6.img = "grassplatform.png";
  platform6.color = "purple";
  platform6.w = 150;
  platform6.h = 30;
  platform6.x = 1050;
  platform6.y = 420;
  platform6.collider = "static";
  platform6 = new Sprite();
  platform6.img = "grassplatform.png";
  platform6.color = "purple";
  platform6.w = 150;
  platform6.h = 30;
  platform6.x = 1150;
  platform6.y = 420;
  platform6.collider = "static";
  
  platform7 = new Sprite();
  platform7.img = "grassplatform.png";
  platform7.color = "purple";
  platform7.w = 150;
  platform7.h = 30;
  platform7.x = 1500;
  platform7.y = 400;
  platform7.collider = "static";
	
  platform8 = new Sprite();
  platform8.img = "grassplatform.png";
  platform8.color = "purple";
  platform8.w = 150;
  platform8.h = 30;
  platform8.x = 1300;
  platform8.y = 200;
  platform8.collider = "static";
  
  platform9 = new Sprite();
  platform9.img = "grassplatform.png";
  platform9.color = "purple";
  platform9.w = 150;
  platform9.h = 30;
  platform9.x = 1000;
  platform9.y = 150;
  platform9.collider = "static";
  
  platform10 = new Sprite();
  platform10.img = "grassplatform.png";
  platform10.color = "purple";
  platform10.w = 150;
  platform10.h = 30;
  platform10.x = 1950;
  platform10.y = 300;
  platform10.collider = "static";
  
  platform11 = new Sprite();
  platform11.img = "grassplatform.png";
  platform11.color = "purple";
  platform11.w = 150;
  platform11.h = 30;
  platform11.x = 2100;
  platform11.y = 450;
  platform11.collider = "static";
  
  platform12 = new Sprite();
  platform12.img = "grassplatform.png";
  platform12.color = "purple";
  platform12.w = 150;
  platform12.h = 30;
  platform12.x = 2400;
  platform12.y = 300;
  platform12.collider = "static";

  platform13 = new Sprite();
  platform13.img = "grassplatform.png";
  platform13.color = "purple";
  platform13.w = 150;
  platform13.h = 30;
  platform13.x = 2750;
  platform13.y = 400;
  platform13.collider = "static";
  platform13 = new Sprite();
  platform13.img = "grassplatform.png";
  platform13.color = "purple";
  platform13.w = 150;
  platform13.h = 30;
  platform13.x = 2850;
  platform13.y = 400;
  platform13.collider = "static";

  platform14 = new Sprite();
  platform14.img = "grassplatform.png";
  platform14.color = "purple";
  platform14.w = 150;
  platform14.h = 30;
  platform14.x = 3100;
  platform14.y = 330;
  platform14.collider = "static";

  platform15 = new Sprite();
  platform15.img = "grassplatform.png";
  platform15.color = "purple";
  platform15.w = 150;
  platform15.h = 30;
  platform15.x = 3300;
  platform15.y = 280;
  platform15.collider = "static";

  platform16 = new Sprite();
  platform16.img = "grassplatform.png";
  platform16.color = "purple";
  platform16.w = 150;
  platform16.h = 30;
  platform16.x = 3600;
  platform16.y = 260;
  platform16.collider = "static";

  platform17 = new Sprite();
  platform17.img = "grassplatform.png";
  platform17.color = "purple";
  platform17.w = 150;
  platform17.h = 30;
  platform17.x = 3900;
  platform17.y = 300;
  platform17.collider = "static";

  platform18 = new Sprite();
  platform18.img = "grassplatform.png";
  platform18.color = "purple";
  platform18.w = 150;
  platform18.h = 30;
  platform18.x = 4300;
  platform18.y = 350;
  platform18.collider = "static";

  platform19 = new Sprite();
  platform19.img = "grassplatform.png";
  platform19.color = "purple";
  platform19.w = 150;
  platform19.h = 30;
  platform19.x = 4600;
  platform19.y = 330;
  platform19.collider = "static";

  platform20 = new Sprite();
  platform20.img = "grassplatform.png";
  platform20.color = "purple";
  platform20.w = 150;
  platform20.h = 30;
  platform20.x = 4900;
  platform20.y = 310;
  platform20.collider = "static";

  platform21 = new Sprite();
  platform21.img = "grassplatform.png";
  platform21.color = "purple";
  platform21.w = 150;
  platform21.h = 30;
  platform21.x = 5200;
  platform21.y = 350;
  platform21.collider = "static";

  platform22 = new Sprite();
  platform22.img = "grassplatform.png";
  platform22.color = "purple";
  platform22.w = 150;
  platform22.h = 30;
  platform22.x = 5000;
  platform22.y = 120;
  platform22.collider = "static";
  platform22 = new Sprite();
  platform22.img = "grassplatform.png";
  platform22.color = "purple";
  platform22.w = 150;
  platform22.h = 30;
  platform22.x = 4900;
  platform22.y = 120;
  platform22.collider = "static";

  platform23 = new Sprite();
  platform23.img = "grassplatform.png";
  platform23.color = "purple";
  platform23.w = 150;
  platform23.h = 30;
  platform23.x = 4600;
  platform23.y = 75;
  platform23.collider = "static";

  platform24 = new Sprite();
  platform24.img = "grassplatform.png";
  platform24.color = "purple";
  platform24.w = 150;
  platform24.h = 30;
  platform24.x = 5400;
  platform24.y = 120;
  platform24.collider = "static";

  platform25 = new Sprite();
  platform25.img = "grassplatform.png";
  platform25.color = "purple";
  platform25.w = 150;
  platform25.h = 30;
  platform25.x = 5700;
  platform25.y = 170;
  platform25.collider = "static";

  platform26 = new Sprite();
  platform26.img = "grassplatform.png";
  platform26.color = "purple";
  platform26.w = 150;
  platform26.h = 30;
  platform26.x = 6000;
  platform26.y = 210;
  platform26.collider = "static";

  flag = new Sprite();
  flag.img = "flag.png";
  flag.color = "pink";
  flag.w = 20;
  flag.h = 20;
  flag.x = 6050;
  flag.y = 165;
  flag.collider = "static";


  winplatform = new Sprite();
  winplatform.img = "grassplatform.png";
  winplatform.color = "yellow";
  winplatform.w = 150;
  winplatform.h = 30;
  winplatform.x = 6000;
  winplatform.y = 210;
  winplatform.collider = "static";

  enemy = new Sprite();
  enemy.img = "wolf-2.png";
  enemy.color = "red";
  enemy.x = 2750;
  enemy.y = 350;
  enemy.w = 25;
  enemy.h = 25;
  enemy.collider = "kinematic";

  enemy2 = new Sprite();
  enemy2.img = "wolf-2.png";
  enemy2.color = "red";
  enemy2.x = 1010; 
  enemy2.y = 365;  
  enemy2.w = 25;
  enemy2.h = 25;
  enemy2.collider = "kinematic";

  enemy3 = new Sprite();
  enemy3.img = "wolf.png";
  enemy3.color = "red";
  enemy3.x = 2550;
  enemy3.y = 530;
  enemy3.w = 25;
  enemy3.h = 25;
  enemy3.collider = "kinematic";

  enemy4 = new Sprite();
  enemy4.img = "wolf.png";
  enemy4.color = "red";
  enemy4.x = 4950;
  enemy4.y = 65;
  enemy4.w = 25;
  enemy4.h = 25;
  enemy4.collider = "kinematic";

  mushroom1 = new Sprite();
  mushroom1.img = "mushroom.png";
  mushroom1.x = 2300;
  mushroom1.y = 528;
  mushroom1.w = 60;
  mushroom1.h = 80;
  mushroom1.collider = "static";
  
  mushroom2 = new Sprite();
  mushroom2.img = "mushroom.png";
  mushroom2.x = 1550;
  mushroom2.y = 340;
  mushroom2.w = 60;
  mushroom2.h = 80;
  mushroom2.collider = "static";
  
  mushroom3 = new Sprite();
  mushroom3.img = "mushroom.png";
  mushroom3.x = 2400;
  mushroom3.y = 240; 
  mushroom3.w = 60;
  mushroom3.h = 80;
  mushroom3.collider = "static";
  
  mushroom4 = new Sprite();
  mushroom4.img = "mushroom.png";
  mushroom4.x = 2100;
  mushroom4.y = 390; 
  mushroom4.w = 60;
  mushroom4.h = 80;
  mushroom4.collider = "static";

  mushroom5 = new Sprite();
  mushroom5.img = "mushroom.png";
  mushroom5.x = 3900;
  mushroom5.y = 240; 
  mushroom5.w = 60;
  mushroom5.h = 80;
  mushroom5.collider = "static";

  mushroom6 = new Sprite();
  mushroom6.img = "mushroom.png";
  mushroom6.x = 4300;
  mushroom6.y = 290; 
  mushroom6.w = 60;
  mushroom6.h = 80;
  mushroom6.collider = "static";

  mushroom7 = new Sprite();
  mushroom7.img = "mushroom.png";
  mushroom7.x = 5200;
  mushroom7.y = 290; 
  mushroom7.w = 60;
  mushroom7.h = 80;
  mushroom7.collider = "static";

  mushroom8 = new Sprite();
  mushroom8.img = "mushroom.png";
  mushroom8.x = 900;
  mushroom8.y = 528;
  mushroom8.w = 60;
  mushroom8.h = 80;
  mushroom8.collider = "static";

  mushroom9 = new Sprite();
  mushroom9.img = "mushroom.png";
  mushroom9.x = 4050;
  mushroom9.y = 528;
  mushroom9.w = 60;
  mushroom9.h = 80;
  mushroom9.collider = "static";

}

function collectCoin(player, coin) {
	coin.remove();
	score++;
}

function draw() {
  
  
  textFont(font);
  clear(); // try removing this line and see what happens!
  


  background(bg);

  

  if (state == 0) {
    playGame();
  } else if (state == 1) {
    winGame();
    player.visible = false;
  }
}

function playGame() {

  background(bg);
  //wingame
  fill(242, 156, 94);
  triangle(150, 50, 150, 15, 280, 25);
  fill(255);
  text('Carrots: ' + score, 160, 33);

  

 
  if (player.collides(winplatform)) {
    state = 1;
  }
  
 // bouncy platform
//   if (player.collides(platform3)) {
//     player.vel.y = -5;
		
//   }
  
    if (player.collides(mushroom1))
       player.vel.y = -10;
  
   if (player.collides(mushroom2))
       player.vel.y = -10;
  
   if (player.collides(mushroom3))
       player.vel.y = -10;
  
  
   if (player.collides(mushroom4))
       player.vel.y = -10;
  
  
   if (player.collides(mushroom5))
        player.vel.y = -10;
  
  
    if (player.collides(mushroom6))
        player.vel.y = -10;
  
   if (player.collides(mushroom7))
       player.vel.y = -10;

    if (player.collides(mushroom8))
     player.vel.y = -10;

     if (player.collides(mushroom9))
     player.vel.y = -10;
  
  
  //camera controls
  camera.x = player.x +300
  camera.y = player.y -133


  //player collect coin code


  //health bar code
  fill(255, 105, 155);
  stroke(201, 64, 112);
  rect(25, 18, player.hp, 25);
  fill(255);
  text(player.hp, 60, 35, 100, 25);

  
  
  //enemy damages player code
  if (player.overlaps(enemy)) player.hp -= 20;
  print(player.hp);
  if (player.overlaps(enemy2)) player.hp -= 20;
  print(player.hp);
  if (player.overlaps(enemy3)) player.hp -= 20;
  print(player.hp);

     player.overlaps(coin, collectCoin);
  player.overlaps(coin2, collectCoin);
  player.overlaps(coin3, collectCoin);
  player.overlaps(coin4, collectCoin);
  player.overlaps(coin5, collectCoin);
  
   
  //bounce code for the enemy
  if (enemy.x > 2900) {
    enemySpeed = -enemySpeed;
  } else if (enemy.x < 2700) {
    enemySpeed = -enemySpeed;
  }

  enemy.vel.x = enemySpeed;

  //this controls the players movement
  if (kb.pressing("left")) {

 player.vel.x = -5 ;
    	player.mirror.x = true;
  
  } else if (kb.pressing("right")) {

player.vel.x = 5;
    player.mirror.x = false;
    
  } else player.vel.x = 0; 
  
  if (player.vel.y == 0) {
    if (kb.pressing("space")) {
      player.vel.y = 35;
    }
  }
	

  // if (player.vel.y == 0) {
  //   if (kb.pressing("space")) {
  //     player.vel.y = 35;
    //}
   

  //basically reset the player
  if (player.hp == 0 || player.y> 700|| player.x < 0) {
    player.x = 100;
    player.y = 300;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
    
   

  }

  //bounce code for the enemy

   //  if (kb.pressing("left")) player.vel.x = -5
  //   else if (kb.pressing("right")) player.vel.x = 5;
   //  else player.vel.x =0;

   //  if(kb.pressing("up")) player.vel.y = -5
   //  else if (kb.pressing("down")) player.vel.y = 5;
  // else if



function winGame() {
  background(221, 246, 250 );
  
 text("WIN!", height/2, width/2)
  textSize(150);
}
}



