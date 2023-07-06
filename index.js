// catch the sidebar
const menu = document.getElementById('menu')
const button = document.getElementById('icon')
const closeIcon = document.getElementById('close-icon')

button.addEventListener('click', function () {
    console.log(`I was clicked`);
    let sidebar = menu.style.display;
    if (sidebar == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

})

closeIcon.addEventListener('click', function () {
    let sidebar = menu.style.display;
    if (sidebar == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

})

window.onclick = function (event) {
    if (event.target == menu) {
        menu.style.display = "none";
    }
} 