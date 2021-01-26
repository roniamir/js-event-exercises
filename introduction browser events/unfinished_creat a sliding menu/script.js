let clickLine = document.getElementById('title');
let li = document.querySelectorAll('li');

console.log(li);
clickLine.addEventListener('click', openClose)

function openClose(){
    if(li.style.display){
        li.hidden = false;
    } else{
        li.hidden = true;
    }
}