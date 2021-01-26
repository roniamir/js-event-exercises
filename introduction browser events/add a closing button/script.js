let buttons = document.querySelectorAll(".remove-button");
console.log(buttons);


buttons.forEach((element) => {
    element.addEventListener('click', () =>{
        element.parentElement.remove();
    })
});