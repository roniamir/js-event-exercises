let myField = document.getElementById('field');
let fieldBorder = myField.getBoundingClientRect();
let myBall = document.getElementById('ball');
myField.addEventListener('click', (e) =>{

    myBall.style.position = 'absolute';
    myBall.style.left = e.clientX - fieldBorder.clientLeft - myBall.offsetWidth/2;
    myBall.style.top= e.clientY - fieldBorder.clientTop - myBall.offsetHeight/2;
})