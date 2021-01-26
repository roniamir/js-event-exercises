let myField = document.getElementById('field');
let fieldBorder = myField.getBoundingClientRect();
let myBall = document.getElementById('ball');
myField.addEventListener('click', (e) =>{
    myBall.style.position = 'absolute';
    console.log(fieldBorder.clientLeft);
    myBall.style.left = (e.clientX - fieldBorder.left - myBall.offsetWidth/2) + 'px';
    myBall.style.top= (e.clientY - fieldBorder.top - myBall.offsetHeight/2) + 'px';
})