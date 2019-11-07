"use strict";

var font;
var img;
var vehicles = [];
var wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function preload() {
  font = loadFont('../fonts/AlbertTextBold.otf');
  // img = loadImage('../images/banners/beauty-buble.jpg');
}

function setup() {
  let myCanvas = createCanvas(wWidth, wHeight);
  myCanvas.parent('main-banner');
  
  // image(img, 100, 100);
  background(255);
 
  var points = font.textToPoints('s0ya - studio', wWidth/2 -410, wHeight/2 -70, 150, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(255);
  // image(img, 0, 111, wWidth, wHeight-111);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
};