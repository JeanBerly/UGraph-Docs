let darkThemeSelected = false;
function toggleTheme(){
    let icons = [...document.getElementsByClassName("iconThemeToggle")];
    if (!darkThemeSelected){
        document.body.classList.add("dark");
        icons.forEach(elem =>{
            elem.classList.add("fa-moon");
            elem.classList.remove("fa-sun");
        })
    }
    else{
        icons.forEach(elem =>{
            elem.classList.add("fa-sun");
            elem.classList.remove("fa-moon");
        })
        document.body.classList.remove("dark");

    }
    darkThemeSelected = !darkThemeSelected;
}