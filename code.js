var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["398f1736-40de-4260-ae21-f73ebd0fd6fb","9c53403e-d289-45b6-b17a-61946789863a","8b42c374-750a-489d-9ad7-b942ba84cb60","5890a385-3ec9-4906-a267-90faa8be6b9a","2121d45a-6ea6-4c80-a949-a25def9e52bc","53a36b12-0f4c-43c8-b9fc-591fd1e2de74","a6c3cd6a-ff94-4789-a86b-0dec15e931ca","523122c0-e54e-4398-9cd8-d13299a759a2"],"propsByKey":{"398f1736-40de-4260-ae21-f73ebd0fd6fb":{"name":"sam","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IYFMiChynkSbHxbL2_eHBbIKoyDKb_r.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/398f1736-40de-4260-ae21-f73ebd0fd6fb.png"},"9c53403e-d289-45b6-b17a-61946789863a":{"name":"sammove","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YB_C3CUUUS38WScT3koZEItWPz_k_aDR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9c53403e-d289-45b6-b17a-61946789863a.png"},"8b42c374-750a-489d-9ad7-b942ba84cb60":{"name":"sammoveleft","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TEL.BLtZR_185wS6JWB5d.vEoR.Ahy5l","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8b42c374-750a-489d-9ad7-b942ba84cb60.png"},"5890a385-3ec9-4906-a267-90faa8be6b9a":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"2121d45a-6ea6-4c80-a949-a25def9e52bc":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"53a36b12-0f4c-43c8-b9fc-591fd1e2de74":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"a6c3cd6a-ff94-4789-a86b-0dec15e931ca":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"523122c0-e54e-4398-9cd8-d13299a759a2":{"name":"car_green_1_copy_1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":false,"frameDelay":12,"version":"LW.TxKsz_Sg_hhvfRsdS.OXlCTCMmIkt","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/523122c0-e54e-4398-9cd8-d13299a759a2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,10,10);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car1.velocityY=+4;
  car3.velocityY=-4;
  car4.velocityY=-4;
  car2.velocityY=+4;
  sam.setAnimation("sam");
  sam.scale = 0.3;
car4.setAnimation("car_blue_1");
car3.setAnimation("car_red_1");
car2.setAnimation("car_green_1");
 
car1.scale = 0.1;
car4.scale = 0.1;
car3.scale = 0.1;
car2.scale = 0.1;
car1.setAnimation("car_black_1");
   
 
//adicione velocidade para fazer o carro se mover.

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  if (keyDown("right")) {
   sam.x = sam.x+3
   sam.setAnimation("sammove");
   
  }
  if (keyDown("left")) {
   sam.x = sam.x-3 
   sam.setAnimation("sammoveleft");
   
  }
  if(sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4)){
       sam.x=20;
       sam.y=190;
       life=life+1;
     
    
  }
  if (keyWentUp("right")) {
   sam.setAnimation("sam");
     
  }
  if (keyWentUp("left")) {
   sam.setAnimation("sam");
     
  }
  
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
