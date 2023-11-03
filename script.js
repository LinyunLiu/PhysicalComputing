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

}