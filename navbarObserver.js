function setItemActive(item){
    let oldActiveItem = document.getElementsByClassName("itemSelected")[0];
    let newActiveItem;
    item.parentNode.childNodes.forEach(elem => {if (elem.tagName === "UL") newActiveItem = elem});
    if (oldActiveItem == null){ newActiveItem.classList.add("itemSelected"); return;}
    newActiveItem.classList.add("itemSelected");
    oldActiveItem.classList.remove("itemSelected");
}