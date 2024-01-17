function showSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.add("visible");

}
function hideSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("visible");
}


