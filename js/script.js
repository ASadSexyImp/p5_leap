// magic word to use leap
var controller = new Leap.Controller({
  enableGestures: true
});

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //tracking
  controller.on("frame", function (frame) {

    //each hand
    for (var i = 0, len = frame.hands.length; i < len; i++) {
      var hand = frame.hands[i];
      handShow({
        posX: hand.palmPosition[0] * 3,
        posY: hand.palmPosition[1] * 3 - 150
      }, false);
    }
    //each finger
    for (var i = 0, len = frame.pointables.length; i < len; i++) {
      var pointable = frame.pointables[i];
      handShow({
        posX: pointable.tipPosition[0] * 3,
        posY: pointable.tipPosition[1] * 3
      }, true);
    }
  });
  controller.connect();
}
//手の描画
function handShow(arg, isFinger) {
  var posX = width / 2 + arg.posX,
    posY = height - (arg.posY),
    radius = (isFinger) ? 30 : 90;
  fill(0);
  ellipse(posX, posY, radius)
}