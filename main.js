let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let bt1 = document.querySelector('.bt1');
let bt2 = document.querySelector('.bt2');
let bt3 = document.querySelector('.bt3');
let bt4 = document.querySelector('.bt4');

bt1.addEventListener('click', function(){
   document.querySelector('.show').classList.remove('show');
   document.querySelector('.active').classList.remove('active');

   box1.classList.add ('show');
   bt1.classList.add ('active');
});

bt2.addEventListener('click', function(){
    document.querySelector('.show').classList.remove('show');
    document.querySelector('.active').classList.remove('active');

    box2.classList.add ('show');
    bt2.classList.add ('active');
});
bt3.addEventListener('click', function(){
   document.querySelector('.show').classList.remove('show');
   document.querySelector('.active').classList.remove('active');

   box3.classList.add ('show');
   bt3.classList.add ('active');
});
bt4.addEventListener('click', function(){
   document.querySelector('.show').classList.remove('show');
   document.querySelector('.active').classList.remove('active');

   box4.classList.add ('show');
   bt4.classList.add ('active');
});

