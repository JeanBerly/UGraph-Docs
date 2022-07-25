let isActive = false;
function toggleNavbar(){
    let menuNavbar = document.getElementById("navbarDocumentationTopicsMobile");
    isActive ? menuNavbar.classList.remove("d-block") : menuNavbar.classList.add("d-block");
    isActive = !isActive;
}