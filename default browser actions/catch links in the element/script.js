const parentOfLinks = document.querySelector(".paragraph");
parentOfLinks.addEventListener('click', catchLinks);

function catchLinks(e){
    if(e.target !== e.currentTarget){
        let answer = confirm("Do you want to go to " + e.target.innerText);
        if(!answer){
            e.preventDefault();
        }
        return answer;
    }   
}

function moveTo(ans, trg){
    if(ans){
        console.log(trg.getAttribute('href'))
        return true;
    } 
        return false;
}
/*

parentOfLinks.onckick = function(event){
    console.log(event);
    event.preventDefault();
    if(event.target !== event.currentTarget){
        let clickedItem = event.target;
        console.log(clickedItem);
        alert("Leave to " + clickedItem + " ?");
        event.stopPropagation();
    }
};
/*parentOfLinks.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();
    if(e.target !== e.currentTarget){
        let clickedItem = e.target;
        console.log(clickedItem);
        //alert("Leave to " + clickedItem.
        e.stopPropagation();
    }
});
*/
