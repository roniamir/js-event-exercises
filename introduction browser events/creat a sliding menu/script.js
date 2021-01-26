let clickLine = document.querySelector('#title');
let ul = document.querySelector('.ul');
let symbol = document.querySelector('#symbol');
console.log(clickLine);

ul.hidden = true;
clickLine.addEventListener('click', openClose);

function openClose(){
    if(ul.hidden){
        ul.hidden = false;
        symbol.innerHTML = '▼';
    } else{
        ul.hidden = true;
        symbol.innerHTML = '▶'
    }

   
}