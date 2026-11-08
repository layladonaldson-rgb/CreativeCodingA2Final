//let particles = creates array of vectors, without a class as vectors used to track particle location on-screen - no more complexity is needed.
//const num = this is how many particles we want.
let particles = [];
const num = 20000;


//have to scale down the values that we're picking, incremented more with larger decimals.
const noiseScale = 0.0035;

//putting vectors into the list of particles: 
//for loop = up to the number we just specified
//particles.push = placing them randomly, using 'width' for x-axis and 'height' for y-axis - which INITALISES the particles.
//stroke = set to white so that they are visible on the screen.
          //var col = 0;

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height))); {
          //c1 = color(255, 0, 0);
         //c2 = color(255, 255, 0);
    }
         //colorMode (HSB, 360, 100, 100, 100);
         //let stroke = map(mouseX, 0, width, 0, 360);
  }
  stroke(90,180,200)

         //define gradient colours - yt video that did not work
         //c1 = color(20, 30, 80); // deep blue
         //c2 = color(250, 180, 50)
}

//background set to 0, having particles show up as white 'for' loop
//then 'p' integer as variable because 'particles' were already used to draw a dot on the screen at the point of the particular vector. 
//background , 10 = alpha component, so that the bg if faded and you can see behind it.
//p.x += cos(a) means p.x + cos(a) means that its just incrementing in a loop.
//TAU = 2 pi
function draw() {
        //col = map(mouseX, 0, 600, 0, 255);
  background(0, 10);
      //background(col) //(0, 10)
      //map(mouseX, 0, 600, 0, 255)
      // Create a p5.Color object.
        //let c = color(0, 126, 255, 102);
    // Set 'alphaValue' to 102.
        //let alphaValue = alpha(c);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
//if the particles leave the perimeter this statement spawns them back in at a random height and width on-screen.
      p.x = random(width);
      p.y = random(height);
    }
  }
}

//changes the 'seed' and the noise values that we get. Millis for milliseconds
function mouseReleased() {
  noiseSeed(millis())
}

//to check if a vertex is off the screen

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

