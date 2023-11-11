function toggleNav() {
    const nav = document.getElementById("topnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}

function removeSomeNav(){
    const topnav = document.getElementById('topnav');
    const links = topnav.getElementsByTagName('a');
    for (let i = links.length-1; i >= 0; i--) {
        // Check if the href attribute is empty
        if (links[i].getAttribute('href') === "") {
            // Remove the <a> element if it matches the criteria
            topnav.removeChild(links[i]);
        }
    }
    getRidOfHTML()
}

function getRidOfHTML(){
    // Get all the <a> elements inside the element with id "topnav"
    const links = document.getElementById("topnav").getElementsByTagName("a");
    // Loop through each <a> element and update its href attribute
    for (let i = 0; i < links.length; i++) {
        const currentHref = links[i].getAttribute("href"); // Get the current href attribute
        const newHref = currentHref.replace(".html", ""); // Remove ".html" from the href
        links[i].setAttribute("href", newHref); // Set the updated href attribute
    }

}
