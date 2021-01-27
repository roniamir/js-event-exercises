const treeContainer = document.getElementById("tree");

treeContainer.addEventListener('click', hideChildren);

function hideChildren(e){
    let clickedTarget = e.target.closest('li');

    if(clickedTarget.childNodes[1] === undefined) return;

    if (clickedTarget.hasChildNodes()) {
        let children = clickedTarget.childNodes[1];
        children.hidden = hiddenStatus(children);
      } else{
          return;
      }
}

function hiddenStatus(trg){  //check hidden status (true/false) and return the opposite
    if(trg.hidden){
        return false;
    }
    return true;
}