'use strict';

// Global variable to track all products
var busmall_products = [];

// Global variable indicating number of clicks
var number_of_clicks = 25;

// Global variable to track their container
var product_container = document.body;

// Link all images from index.html by using getElementById
var imagebag = document.getElementById('imagebag');
var imagebanna = document.getElementById('imagebanna');
var imagebathroom = document.getElementById('imagebathroom');
var imageboots = document.getElementById('imageboots');
var imagebreakfast = document.getElementById('imagebreakfast');

var imagebubblegum = document.getElementById('imagebubblegum');
var imagechair = document.getElementById('imagechair');
var imagecthulhu = document.getElementById('imagecthulhu');
var imagedogduck = document.getElementById('imagedogduck');
var imagedragon = document.getElementById('imagedragon');

var imagepen = document.getElementById('imagepen');
var imagepetsweep = document.getElementById('imagepetsweep');
var imagescissors = document.getElementById('imagescissors');
var imageshark = document.getElementById('imageshark');
var imagesweep = document.getElementById('imagesweep');

var imagetuantuan = document.getElementById('imagetuantuan');
var imageunicorn = document.getElementById('imageunicorn');
var imageusb = document.getElementById('imageusb');
var imagewatercan = document.getElementById('imagewatercan');
var imagewineglass = document.getElementById('imagewineglass');

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
Product.prototype.render_as_img = function(target_img) {
  target_img.src = this.url;
};

// Instantiate objects
new Product('imagebag', 'bag.jpg');
new Product('imagebanna', 'banana.jpg');
new Product('imagebathroom', 'bathroom.jpg');
new Product('imageboots', 'boots.jpg');
new Product('imagebreakfast', 'breakfast.jpg');

new Product('imagebubblegum', 'bubblegum.jpg');
new Product('imagechair', 'chair.jpg');
new Product('imagecthulhu', 'cthulhu.jpg');
new Product('imagedogduck', 'dog-duck.jpg');
new Product('imagedragon', 'dragon.jpg');

new Product('imagepen', 'pen.jpg');
new Product('imagepetsweep', 'pet-sweep.jpg');
new Product('imagescissors', 'scissors.jpg');
new Product('imageshark', 'shark.jpg');
new Product('imagesweep', 'sweep.jpg');

new Product('imagetuantuan', 'tuantuan.jpg');
new Product('imageunicorn', 'unicorn.jpg');
new Product('imageusb', 'usb.jpg');
new Product('imagewatercan', 'watercan.jpg');
new Product('imagewineglass', 'wineglass.jpg');

// Go back to constructor function. Tell each instantiation to live inside of the product container array after they are constructed. In addition, it will get the render_as_img prototype.

