
let count = 0;
 const counterelement = document.getElementById('counter');
 const incrementbutton =document.getElementById('increment');
 const decrementtbutton =document.getElementById('decrement');

 incrementbutton.addEventListener('click' ,() =>{
    count++;
    counterelement.textContent = count;
 })


 decrementtbutton.addEventListener('click',() =>{
    count--;
    counterelement.textContent = count;
 })
