async function loadNavbarInfo() {
    const response = await fetch('./assets/navbarinfo/navbar.json');
    const info = await response.json();
    return info;
}
let navbarTemplate =
    `
<nav id="navbarDocumentationTopicsMenuCopy" class="d-lg-none">
        <ul class="documentation-topics">
            <li>
                <h2 onclick="setItemActive(this)"></h2>
                <ul class="navbar--ul itemSelected">
                </ul>
            </li>
            <li>
                <h2 onclick="setItemActive(this)"></h2>
                <ul class="navbar--ul">
                </ul>
            </li>
            <li>
                <h2 onclick="setItemActive(this)"></h2>
                <ul class="navbar--ul">
                </ul>
            </li>
        </ul>
    </nav>
`
async function renderNavbars(){
    let navbarInfo = await loadNavbarInfo();
    // Navbar Desktop
    let navbarDesktop = document.createElement("nav");
    navbarDesktop.id = "navbarDocumentationTopics"
    let ulNavbarDesktop = createTopicsUl();
    navbarInfo.forEach(topic => {
        let topicListItem = document.createElement("li");
        topicListItem.appendChild(createTopicListElement(topic.name));
        let ul = createSubTopicUl();
        topic.childrens.forEach(subTopic => {
            let li = document.createElement("li");
            li.textContent = subTopic;
            ul.appendChild(li);
        });

        topicListItem.appendChild(ul);
        ulNavbarDesktop.appendChild(topicListItem);
        navbarDesktop.appendChild(ulNavbarDesktop);
    });
    let targetNavbarDesktop = document.getElementsByClassName("left-bar")[0];
    targetNavbarDesktop.appendChild(navbarDesktop);
    //
    let navbarMobile = document.createElement("nav");
    navbarMobile.id = "navbarDocumentationTopicsMobile";
    navbarMobile.classList.add("d-lg-none");
    let ulNavbarMobile = createTopicsUl();
    navbarInfo.forEach(topic => {
        let topicListItem = document.createElement("li");
        topicListItem.appendChild(createTopicListElement(topic.name));
        let ul = createSubTopicUl();
        topic.childrens.forEach(subTopic => {
            let li = document.createElement("li");
            li.textContent = subTopic;
            ul.appendChild(li);
        });
        topicListItem.appendChild(ul);
        ulNavbarMobile.appendChild(topicListItem);
        navbarMobile.appendChild(ulNavbarMobile);
    });
    let targetNavbarMobile = document.getElementById("mobileNavbarContainer");
    targetNavbarMobile.appendChild(navbarMobile);
}
function createTopicListElement(name){
    let topicName = document.createElement("h2");
    topicName.textContent = name;
    topicName.setAttribute("onclick", "setItemActive(this)");
    return topicName;
}
function createSubTopicUl(){
    let ul = document.createElement("ul");
    ul.classList.add("navbar--ul");
    return ul;
}
function createTopicsUl(){
    let ul = document.createElement("ul");
    ul.classList.add("documentation-topics");
    return ul;
}
renderNavbars()