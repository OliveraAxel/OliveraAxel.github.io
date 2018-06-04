let value = "red";
let flashing = false
let radians = 25
let rotationamount = 0
let bubble;
var song;
let color = "Pink"
// var sound, amplitude, cnv;

// var sound, amplitude;

// var d = dist(mouseX, mouseY, x, y);


function preload() {
  song = loadSound('R.mp3')
}
function setup(){
  song = loadSound('R.mp3')
  createCanvas(1200,800)
  	rectMode(CENTER);
	stroke(255, 50);
	bubble = {
      x:1000,
      y:150,
      d:100
	}
cnv= createCanvas(1200, 800)
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });


}

function draw() {
  background(0)
  fill(value)
  ellipse(bubble.x , bubble.y, bubble.d );

  if (flashing) {
    if (frameCount % 10 == 0) {
      if (value == "red") {
       value= "blue"
      }
    else {
      value = "red"
      }
    }
  }

  push()
  translate(150, 150);
  rotate(radians);
  radians += rotationamount
  fill("green");
	rect(0, 0, 100, 100);
  pop()
  push()


  fill("red")
  translate(1000,550)
  rotate(radians)
  star(0, 0, 80, 100, 40);
  radians += rotationamount

  pop()

  push()
  fill(color)
  var level = amplitude.getLevel();
  var size = map(level, 1, 0, 2, 200);
  ellipse(width/2, height/2, size, size);
   if (flashing) {
    if (frameCount % 10 == 0) {
      if (color == "Pink") {
       color= "white"
      }
    else {
      color = "Pink"
      }
    }
  }
  pop()
}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
    endShape(CLOSE);

  // var d = dist(mouseX, mouseY, x, y);
  //   if (d < )
}



function mousePressed() {
  if (flashing == false) {
    flashing = true
  } else {
    flashing = false
  }

  if ( rotationamount== 0)
  {
    rotationamount = .01
  }
  else
  {
    rotationamount = 0
  }
  if ( song.isPlaying() ) {
    song.stop();

  } else {
    song.play();

  }
}









// var sound, amplitude, cnv;

// function preload(){
//   sound = loadSound('assets/beat.mp3');
// }
// function setup() {
//   cnv = createCanvas(100,100);
//   amplitude = new p5.Amplitude();

//   // start / stop the sound when canvas is clicked
//   cnv.mouseClicked(function() {
//     if (sound.isPlaying() ){
//       sound.stop();
//     } else {
//       sound.play();
//     }
//   });
// }


