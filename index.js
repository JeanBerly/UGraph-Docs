let darkThemeSelected = false;
function toggleTheme(){
    if (!darkThemeSelected){
        document.body.classList.add("dark");
        document.getElementById("iconThemeToggle").classList.remove("fa-sun");
        document.getElementById("iconThemeToggle").classList.add("fa-moon");
    }
    else{
        document.body.classList.remove("dark");
        document.getElementById("iconThemeToggle").classList.remove("fa-moon");
        document.getElementById("iconThemeToggle").classList.add("fa-sun");
    }
    darkThemeSelected = !darkThemeSelected;
}