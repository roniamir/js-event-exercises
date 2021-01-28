const container = document.getElementById("container");

container.addEventListener('mouseover', popTooltip);
container.addEventListener('mouseout', removeTooltip);

function popTooltip(e){
    if (e.target.dataset.tooltip != undefined) { // if the attribute exists - creat and add tooltip element
        let tooltip = document.createElement('span');
        tooltip.classList.add('tootip', 'tooltipText');
        let tooltipText = e.target.dataset.tooltip;
        e.preventDefault();
        tooltip.innerText = tooltipText;
        e.target.closest('button').append(tooltip);
       // tooltip.hidden = false;
      }

      console.log(e.target);


}

function removeTooltip(e){
    if (e.target.dataset.tooltip != undefined) {
        let tooltip = e.target.childNodes[1];
        console.log(tooltip);
        tooltip.remove();
    }
    console.log(e.target);
}