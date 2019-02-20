'use strict';

// Global variable to track all products
var busmall_products = [];

// Global variable indicating number of clicks
var number_of_clicks = 25;

var product_container = document.body;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

var image_displayed1 = null;
var image_displayed2 = null;
var image_displayed3 = null;


// Constructor Function
var Product = function(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0; 
  this.appeared = 0;

  // Tell each instantiation to live inside of the product container array after they are constructed. In addition, it will get the render_as_img prototype. 
  busmall_products.push(this);

};

// Prototype with target location to reach into
Product.prototype.render_as_img = function(target_img, target_h2) {
  target_img.src = this.url;
  target_h2.textContent = this.name;
};

// Instantiate objects/products
new Product('imagebag', 'img/bag.jpg');
new Product('imagebanna', 'img/banana.jpg');
new Product('imagebathroom', 'img/bathroom.jpg');
new Product('imageboots', 'img/boots.jpg');
new Product('imagebreakfast', 'img/breakfast.jpg');

new Product('imagebubblegum', 'img/bubblegum.jpg');
new Product('imagechair', 'img/chair.jpg');
new Product('imagecthulhu', 'img/cthulhu.jpg');
new Product('imagedogduck', 'img/dog-duck.jpg');
new Product('imagedragon', 'img/dragon.jpg');

new Product('imagepen', 'img/pen.jpg');
new Product('imagepetsweep', 'img/pet-sweep.jpg');
new Product('imagescissors', 'img/scissors.jpg');
new Product('imageshark', 'img/shark.jpg');
new Product('imagesweep', 'img/sweep.jpg');

new Product('imagetuantuan', 'img/tuantuan.jpg');
new Product('imageunicorn', 'img/unicorn.jpg');
new Product('imageusb', 'img/usb.jpg');
new Product('imagewatercan', 'img/watercan.jpg');
new Product('imagewineglass', 'img/wineglass.jpg');

image_displayed1 = busmall_products[0];
image_displayed2 = busmall_products[1];
image_displayed3 = busmall_products[2];

// Track num of clicks. Decrement each time product is clicked. 
function handle_bus_click (event) {
  number_of_clicks --;

  // if(left was clicked), increment left
  if (event.target.id === 'image1') {
    image_displayed1.clicks++;
  }

  // if(middle was clicked), increment middle
  if (event.target.id === 'image2') {
    image_displayed2.clicks++;
  }

  // if(right was clicked), increment right
  if (event.target.id === 'image3') {
    image_displayed3.clicks++;
  }

  console.log('clicked');
  // click to a max of 25 times
  // show results
  // kill the listener

  if (number_of_clicks <= 0) {
    //show the results
    // clickcount
    // click total
    // rendering a ul ( or a chart );
    product_container.removeEventListener('click', handle_bus_click);
  }

  var random1 = Math.floor(Math.random() * busmall_products.length);
  var random2 = Math.floor(Math.random() * busmall_products.length);
  var random3 = Math.floor(Math.random() * busmall_products.length);

  // In the random_left variable (box), pass the target of an image to the render_as_img function. These are the initial images values of each variable (box).
  busmall_products[random1].render_as_img(image1);
  busmall_products[random2].render_as_img(image2);
  busmall_products[random3].render_as_img(image3);
}

// Go back to constructor function. Tell each instantiation to live inside of the product container array after they are constructed. In addition, it will get the render_as_img prototype.

// Create a listener that waits for an event of a click. Then it will trigger a fuction that consumes the click event. 
product_container.addEventListener('click', handle_bus_click);

//===============================

// // Link all images from index.html by using getElementById
// var imagebag = document.getElementById('imagebag');
// var imagebanna = document.getElementById('imagebanna');
// var imagebathroom = document.getElementById('imagebathroom');
// var imageboots = document.getElementById('imageboots');
// var imagebreakfast = document.getElementById('imagebreakfast');

// var imagebubblegum = document.getElementById('imagebubblegum');
// var imagechair = document.getElementById('imagechair');
// var imagecthulhu = document.getElementById('imagecthulhu');
// var imagedogduck = document.getElementById('imagedogduck');
// var imagedragon = document.getElementById('imagedragon');

// var imagepen = document.getElementById('imagepen');
// var imagepetsweep = document.getElementById('imagepetsweep');
// var imagescissors = document.getElementById('imagescissors');
// var imageshark = document.getElementById('imageshark');
// var imagesweep = document.getElementById('imagesweep');

// var imagetuantuan = document.getElementById('imagetuantuan');
// var imageunicorn = document.getElementById('imageunicorn');
// var imageusb = document.getElementById('imageusb');
// var imagewatercan = document.getElementById('imagewatercan');
// var imagewineglass = document.getElementById('imagewineglass');