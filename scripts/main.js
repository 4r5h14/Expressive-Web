

let btn = document.querySelector('.Laundry');
btn.addEventListener('click', function(){
    let showMe = document.querySelector('.Laundry');
       this.remove(showMe);   
});

let disappear = document.querySelector('.Clothes');
disappear.addEventListener('click', function(){
  let clothes = document.querySelector(".Clothes");
  this.remove(clothes);
});



let disappear2 = document.querySelector('.Clothes2');
disappear2.addEventListener('click', function(){
  let clothes = document.querySelector(".Clothes2");
  // Clone the original element
  var duplicate = disappear2.cloneNode(true);

  // Modify the position of the duplicate 
  var offsetX = 100;
  var offsetY = 300;

  // Calculate new position based on the original position
  var originalRect = disappear2.getBoundingClientRect();
  var newLeft = originalRect.left + offsetX;
  var newTop = originalRect.top + offsetY;

  // Set the position of the duplicate
  duplicate.style.left = newLeft + 'px';
  duplicate.style.top = newTop + 'px';

  // Append the duplicate to the document
  document.body.appendChild(duplicate);
 
  //remove both objects
  disappear2.remove();
  duplicate.addEventListener('click', function () {
    duplicate.remove();
  });

});



let lightleft = document.querySelector('.light1');
lightleft.addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue";    
});


let lightright = document.querySelector('.light2');
lightright.addEventListener('click', function() {
       document.body.style.backgroundColor = "lightyellow";
    
});

let switch2 = document.querySelector('.Switch');
switch2.addEventListener('click', function() {
    document.body.style.backgroundColor = "white";    
});



let clock = document.querySelector('.Clock');
let switchButton = document.querySelector('.Switch');
let isColorChanging = false; // Initialize to false
let audio = new Audio('./assets/data/Love Shake (DJ Stereo Club Mix).wav');

function getRandomColor() {
  // Function to generate a random hex color
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function startColorChanging() {
  // Set an interval to change the background color every 40 milliseconds
  var colorChangeInterval = setInterval(function () {
    document.body.style.background = getRandomColor();
  }, 40); 
  

  // Stop the interval when the switch button is clicked
  switchButton.addEventListener('click', function () {
    clearInterval(colorChangeInterval);
    document.body.style.background = "white";
    isColorChanging = false;
    audio.pause();
  });
}

clock.addEventListener('click', function () {
 
  if (!isColorChanging) {
    isColorChanging = true;
    document.body.style.background = getRandomColor();
    startColorChanging();
    audio.pause(); // Pause any ongoing audio
    audio.currentTime = 0; // Reset audio to the beginning
    audio.play(); // Play the audio
  } else {
    // Reset the background color and start the color-changing process again
    document.body.style.background = "white";
    isColorChanging = false;
    clock.click()
    audio.pause(); // Simulate a click to restart the process
  }
});





let cactus = document.querySelector('.Cactus');
cactus.addEventListener('click', function(){
  cactus.style.transition = 'transform 0.3s ease-in-out;'
  cactus.style.transform = 'rotate(0deg)';
  cactus.style.position = 'absolute';
  cactus.style.top = '36%';
  cactus.style.right = '22%'; 
});





let sidetable = document.querySelector('.SideTableLeft');
sidetable.addEventListener('click', function () {
  sidetable.style.transform = 'rotate(0deg)';
  sidetable.style.position = 'absolute';
  sidetable.style.top = '35%';
  sidetable.style.left = '21.5%';
});


let rightsidetable = document.querySelector('.SideTableRight');
rightsidetable.addEventListener('click', function () {
  rightsidetable.style.transform = 'rotate(0deg)';
  rightsidetable.style.position = 'absolute';
  rightsidetable.style.top = '38%';
  rightsidetable.style.right = '21%';
});

let phone = document.querySelector('.Phone');
phone.addEventListener('click', function () {
  phone.style.transform = 'rotate(0deg)';
  phone.style.position = 'absolute';
  phone.style.top = '34%';
  phone.style.right = '26%';
})

let painting = document.querySelector('.p5painting');
painting.addEventListener('click', function () {
  painting.style.transform = 'rotate(0deg)';
  painting.style.position = 'absolute';
  painting.style.top = '10%';
  painting.style.right = '28%';
})


let dirty = document.querySelector('.dirty');
dirty.addEventListener('click', function(){
  let dish = document.querySelector(".dirty");
  this.remove(dish);
  
});

let soda = document.querySelector('.spill');
soda.addEventListener('click', function(){
  let spill = document.querySelector(".spill");
  this.remove(spill);
});



let hypertext = document.querySelector('.beanbag');
hypertext.addEventListener('click', function(){
  // Get the value of the 'href' attribute
  let link = hypertext.getAttribute('href');

  // Navigate to the linked webpage
  window.location.href = "https://4r5h14.github.io/Hypertext_Project/";
});