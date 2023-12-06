

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



let lightleft = document.querySelector('.light1');

lightleft.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
   
    
});

let lightright = document.querySelector('.light2');

lightright.addEventListener('click', function() {
       document.body.style.backgroundColor = "yellow";
    
});

let button = document.querySelector('.Switch');
button.addEventListener('click', function(){
  document.body.style.background = "white";

  
});

