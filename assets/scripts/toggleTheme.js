let darkThemeSelected = false;
function toggleTheme(){
    let githubIcon = document.getElementById("githubIcon");
    let icons = [...document.getElementsByClassName("iconThemeToggle")];
    if (!darkThemeSelected){
        document.body.classList.add("dark");
        icons.forEach(elem =>{
            elem.classList.add("fa-moon");
            elem.classList.remove("fa-sun");
        })
        githubIcon.src = "./assets/imgs/GitHub-Mark-Light-32px.png";
    }
    else{
        icons.forEach(elem =>{
            elem.classList.add("fa-sun");
            elem.classList.remove("fa-moon");
        })
        document.body.classList.remove("dark");
        githubIcon.src = "./assets/imgs/GitHub-Mark-32px.png";
    }
    darkThemeSelected = !darkThemeSelected;
}