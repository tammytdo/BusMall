'use strict';

// Global variable to track all products
var busmall_products = [];

// Global variable indicating number of clicks
var number_of_clicks = 25;

var product_container = document.getElementById('product_container');

// Linking three image elements and three h2 elements from index.html 
var image1 = document.getElementById('image1');
var h2_left = document.getElementById('h2_left');

var image2 = document.getElementById('image2');
var h2_middle = document.getElementById('h2_middle');

var image3 = document.getElementById('image3');
var h2_right = document.getElementById('h2_right');


var image_left = null;
var image_middle = null;
var image_right = null;


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
Product.prototype.render_as_img = function(target_img, target_h2){
  target_img.src = this.url;
  target_h2.textContent = this.name;
};

// Instantiate objects/products
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');

new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dogduck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');

new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');

new Product('tuantuan', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water can', 'img/water-can.jpg');
new Product('wineglass', 'img/wine-glass.jpg');

image_left = busmall_products[0];
image_middle = busmall_products[1];
image_right = busmall_products[2];

function handle_bus_click (event) {
  if (event.target.tagName === 'IMG'){
    // track num of clicks, increment or decrement
    number_of_clicks --;

    // if(left was clicked), increment left
    // if(middle was clicked), increment middle
    // if(right was clicked), increment right

    if(event.target.id === 'image1'){
      image_left.clicks++;
    }

    if(event.target === 'image2'){
      image_middle.clicks++;

    }

    if (event.target === 'image3') {
      image_right.clicks++;

    }

    console.log('clicked');
    // click to a max of 25 times
    // show results

    if (number_of_clicks <= 0) {
      // stop the listener
      product_container.removeEventListener('click', handle_bus_click);

      //show the results
      
      // clickcount
      
      // click total

      // rendering a ul ( or a chart );

    }

    // rotate through new images
    var random1 = Math.floor(Math.random() * busmall_products.length);
    var random2 = Math.floor(Math.random() * busmall_products.length);
    var random3 = Math.floor(Math.random() * busmall_products.length);

    busmall_products[random1].render_as_img(image1, h2_left);
    busmall_products[random2].render_as_img(image2, h2_middle);
    busmall_products[random3].render_as_img(image3, h2_right);

    image_left = busmall_products[random1];
    image_middle = busmall_products[random2];
    image_right = busmall_products[random3];
  }  
}

product_container.addEventListener('click', handle_bus_click);
