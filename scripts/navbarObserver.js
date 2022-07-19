function setItemActive(item){
    let oldActiveItem = document.getElementsByClassName("itemSelected");
    let newActiveItem;
    item.parentNode.childNodes.forEach(elem => {if (elem.tagName === "UL") newActiveItem = elem});
    if (oldActiveItem == null){ newActiveItem.classList.add("itemSelected"); return;}
    oldActiveItem = [...oldActiveItem];
    oldActiveItem.forEach((i) =>{
        i.classList.remove("itemSelected");
    })
    newActiveItem.classList.add("itemSelected");
}