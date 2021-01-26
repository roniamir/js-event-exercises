const parent = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg')
console.log(largeImg);

parent.addEventListener('click', function(e){
    let smallPic = e.target.closest('a');
    if(!smallPic){ return; }

    largeImg.src = smallPic.href;
    largeImg.alt = smallPic.alt;
    
    e.preventDefault();

})