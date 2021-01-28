let ul = document.getElementById('ul');

console.log(ul);

ul.addEventListener('click', function(e) {
    
    if(e.target.tagName == 'LI'){  //check that user click on item from the list
        const allSelectes = document.querySelectorAll('.selected');
        
        if(!e.ctrlKey){
            for(let li of allSelectes){
                console.log(li.classList);
                if(li.className == 'selected'){
                    li.classList.remove("selected");
                }
            }
        }
        e.target.classList.toggle('selected');

    }
    return false;
})