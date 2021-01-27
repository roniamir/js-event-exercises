const container = document.getElementById('container');

console.log(container);

container.addEventListener('click', (e) => {
    let clickedButton = e.target.closest('button');

    if(!clickedButton) return;

    if(!container.contains(clickedButton)) return;

    let selectedItem = clickedButton.closest('div');
    console.log(selectedItem);
    selectedItem.hidden = true;
})