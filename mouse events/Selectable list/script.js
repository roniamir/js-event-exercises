let ul = document.getElementById('ul');

console.log(ul);

ul.addEventListener('click', function(e) {
    
    const allSelectes = document.querySelectorAll('.selected');
    
    if(e.target.tagName == 'li'){  //check that user click on item from the list
        e.target.classList.toggle('selected');
        if(!ctrlKey){
            for(let li in allSelectes){
                li.classList.remove("selected");
            }
        }
    }
    return false;
})