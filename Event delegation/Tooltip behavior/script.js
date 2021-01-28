const container = document.getElementById("container");

container.addEventListener('mouseover', popTooltip);
container.addEventListener('mouseout', removeTooltip);

function popTooltip(e){
    if (e.target.dataset.tooltip != undefined) { // if the attribute exists - creat and add tooltip element
        let tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        let tooltipText = e.target.dataset.tooltip;
        tooltip.innerText = tooltipText;
        document.body.append(tooltip);

        //tooltipPlace(tooltip, e.target);
console.log(e.target.getBoundingClientRect());
        const targetboundings = e.target.getBoundingClientRect();
        let left = targetboundings.left + (targetboundings.offsetWidth - tooltip.offsetWidth) / 2;
        if (left < 0){
            left = 0; 
        } 

        let top = targetboundings.top - tooltip.offsetHeight - 5;
        if (top < 0) { 
          top = targetboundings.top + targetboundings.offsetHeight + 5;
        }
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
      }
}

function tooltipPlace(theTooltip, button){
    let left = button.left + (button.offsetWidth );

    theTooltip.style.left =left;
}

function removeTooltip(e){
    if (e.target.dataset.tooltip != undefined) {
        let tooltip = document.querySelector('.tooltip');
        tooltip.remove();
    }

}