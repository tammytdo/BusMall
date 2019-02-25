'use strict';

// Global variable to track all products
var busmall_products = [];

// Global variable indicating number of clicks
var number_of_clicks = 25;

var click_results_var = document.getElementById('click_results');

// A reference to the section in the index.html file that holds space for the three image elements  
var product_container = document.getElementById('product_container');

// Linking three image elements and three h2 elements from index.html 
var image1 = document.getElementById('image1');
var h2_left = document.getElementById('h2_left');

var image2 = document.getElementById('image2');
var h2_middle = document.getElementById('h2_middle');

var image3 = document.getElementById('image3');
var h2_right = document.getElementById('h2_right');

// The variables refer to busmall_products to determine the item to display
var image_left = busmall_products[0];
var image_middle = busmall_products[1];
var image_right = busmall_products[2];


// Constructor Function to construct new bus mall objects
var Product = function(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.times_appeared = 0;

  // Tell each instantiation to live inside of the product container array after they are constructed. In addition, it will get the render_as_img prototype. 
  busmall_products.push(this);
};

// Product prototype with a target location that we want to reach
Product.prototype.render_as_img = function(target_img, target_h2){
  target_img.src = this.url;
  target_h2.textContent = this.name;
  this.times_appeared++;

};

// Instantiate bus mall objects/products
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

// function, waiting to handle the click event
function handle_bus_click (event) {
  if (event.target.tagName === 'IMG'){
    // track num of clicks, increment or decrement
    number_of_clicks --;


    // if(left was clicked), increment left
    if(event.target.id === 'image1'){
      image_left.clicks++;
    }

    // if(middle was clicked), increment middle
    if(event.target === 'image2'){
      image_middle.clicks++;

    }

    // if(right was clicked), increment right
    if (event.target === 'image3') {
      image_right.clicks++;

    }

    // console.log('clicked');

    // click to a max of 25 times
    if (number_of_clicks <= 0) {
      // stop the listener
      product_container.removeEventListener('click', handle_bus_click);

      for (var i = 0; i < busmall_products.length; i++) {
        var li_el = document.createElement('li');
        li_el.textContent = `${busmall_products[i].name}  ${busmall_products[i].clicks}/${busmall_products[i].times_appeared}`;
      }

      click_results_var.appendChild(li_el);


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


// Track how many times each image is displayed, for statistical purposes.

// display three new non-duplicating random images need to be automatically. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// To do this, you'll want a constructor function that creates an object associated with each image, with properties for the name of the image, its filepath, number of times it has been shown, and number of times it has been clicked. You'll find it useful to create a property that contains a text string you can use as an ID in HTML.

// After 25 selections have been made, turn off the event listeners on the images

// Display a list of the products with votes received with each item. Such as, "3 votes for the Banana Slicer"
