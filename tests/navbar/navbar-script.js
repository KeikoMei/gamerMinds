const toggle = document.querySelector(".toggle");

const menu = document.querySelector(".menu");

/* Toggle mobile menu */

function toggleMenu() {
    // menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon

        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";

    } else {

        menu.classList.add("active");
        
        // adds the close (x) icon

        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";

    }

}
/* Event Listener */

toggle.addEventListener("click", toggleMenu, false);

/**
 * Hides the navigation menu when a menu item is clicked 
 */
function hideNavigation() {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", hideNavigation);
});


