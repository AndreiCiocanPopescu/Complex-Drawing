

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d6e1d64-120e-486a-9566-3098b8644384","52c4c4fd-3ca0-4e29-82e3-4b916f9e19fd","8f8d1eab-a217-4896-b96b-85ed2f74d676","a1885644-399a-4876-9793-b62ab03b011f","fef24b2d-a574-43c7-8d8b-9a9c3187f9ff","8eda4a2d-9782-4fb2-8681-807785414de6","4cfa0b6e-05ce-4e8e-a7d4-dc465a851953","82de9368-8b2a-495e-82fc-d5b27d29eeae","f4829f97-5c2b-4924-8fa8-74a678d0e78a"],"propsByKey":{"7d6e1d64-120e-486a-9566-3098b8644384":{"name":"dirt","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"uMTNXlw1Jth_h3irQi.GWAW31agSOeke","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/7d6e1d64-120e-486a-9566-3098b8644384.png"},"52c4c4fd-3ca0-4e29-82e3-4b916f9e19fd":{"name":"shells","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"c0ylElvP6Lek31p_7uSke8ENKIqH2gWX","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/52c4c4fd-3ca0-4e29-82e3-4b916f9e19fd.png"},"8f8d1eab-a217-4896-b96b-85ed2f74d676":{"name":"skulls","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"3OLuFIJkEqHvc9zUEEbsjcM7qul3kwWf","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8f8d1eab-a217-4896-b96b-85ed2f74d676.png"},"a1885644-399a-4876-9793-b62ab03b011f":{"name":"head","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"n7RRUhLKxxwqA.SSVsSLqclRtvMHF4kw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a1885644-399a-4876-9793-b62ab03b011f.png"},"fef24b2d-a574-43c7-8d8b-9a9c3187f9ff":{"name":"body","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":".fhZ6WtkSJ_i99SqPT4dpbxglJlNlwO3","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/fef24b2d-a574-43c7-8d8b-9a9c3187f9ff.png"},"8eda4a2d-9782-4fb2-8681-807785414de6":{"name":"nail","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"hXcqWhpWz98nFrzHU0Zp1Bzc1re15tia","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/8eda4a2d-9782-4fb2-8681-807785414de6.png"},"4cfa0b6e-05ce-4e8e-a7d4-dc465a851953":{"name":"beastfly","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":".nsaenCWhdZ7dLXZRWPFlUdYKfaIMEce","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/4cfa0b6e-05ce-4e8e-a7d4-dc465a851953.png"},"82de9368-8b2a-495e-82fc-d5b27d29eeae":{"name":"mask","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"7KKl1TiGL5NSbq6vhYe.0dpCN.MA24RP","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/82de9368-8b2a-495e-82fc-d5b27d29eeae.png"},"f4829f97-5c2b-4924-8fa8-74a678d0e78a":{"name":"wings","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"bXhYciol4UuxPPdD1IGlpzw2WQCjaRvC","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/f4829f97-5c2b-4924-8fa8-74a678d0e78a.png"}}};
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

var dirt = createSprite(200, 250);
dirt.setAnimation("dirt");
dirt.scale = 0.7;
var shells = createSprite(200, 230);
shells.setAnimation("shells");
shells.scale = 1;
var skulls = createSprite(200, 220);
skulls.setAnimation("skulls");
var head = createSprite(322, 212);
head.setAnimation("head");
head.scale = 0.3;
var body = createSprite(316, 235);
body.setAnimation("body");
body.scale = 0.3;
var nail = createSprite(335, 236);
nail.setAnimation("nail");
nail.scale = 0.3;
var beastfly = createSprite(150, 170);
beastfly.setAnimation("beastfly");
beastfly.scale = 0.5;
var mask = createSprite(190, 200);
mask.setAnimation("mask");
mask.scale = 0.55;
var wings = createSprite(180, 170);
wings.setAnimation("wings");
wings.scale = 0.5;
drawSprites();

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
