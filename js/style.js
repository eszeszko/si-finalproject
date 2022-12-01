/*javascript for closing and opening nav */

document.querySelector("#open_nav").addEventListener("click", function() {
    console.log("Opened Nav Bar");
    document.querySelector("#nav_menu").style.display = "flex";

    document.querySelector("#nav_menu").style.width = "250px";
})

document.querySelector("#close_nav").addEventListener("click", function() {
    console.log("Closed Nav Bar");
    document.querySelector("#nav_menu").style.display = "none";
    document.querySelector("#nav_menu").style.width = "0px";
})