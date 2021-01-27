const container = document.getElementById('container');

console.log(container);

container.addEventListener('click', (e) => {
    let para = e.target.closest('button');
    if(!para) return;

    if(!container.contains(para)) return;

    let selectedItem = e.target.closest('div');
    container.remove(selectedItem);
})