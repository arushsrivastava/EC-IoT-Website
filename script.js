window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar"); // Select the Bootstrap navbar
    if (window.scrollY > 50) {  // Adjust the scroll threshold as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
