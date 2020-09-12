/* 
# Wait for the DOM to load and call start()
# https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', start)

/*
# Initiate page
*/
function start () {
    buildNavBar()
}
/*
# Automatically build the navbar for each page
*/
function buildNavBar() {
    if (document.getElementById('navbar_home_id')===null){
        var html = [
            '<ul>',
                '<li><a href="../index.html">Home</a>',
                '<li><a href="#"id="top">Technical Blogs</a>',
                '<!-- First Tier Drop Down -->',
                    '<ul>', 
                        '<li><a href="sprint1-technical.html">Sprint 01 Technical</a></li>',
                        '<li><a href="sprint2-technical.html">Sprint 02 Technical</a></li>',
                        '<li><a href="sprint3-technical.html">Sprint 03 Technical</a></li>',
                        '<li><a href="sprint4-technical.html">Sprint 04 Technical</a></li>',
                    '</ul>',        
                '</li>',
                '<li><a href="#">Cultural Blogs</a>',
                '<!-- First Tier Drop Down -->',
                    '<ul>',
                        '<li><a href="sprint1-cultural.html">Sprint 01 Cultural</a></li>',
                        '<li><a href="sprint2-cultural.html">Sprint 02 Cultural</a></li>',
                        '<li><a href="sprint3-cultural.html">Sprint 03 Cultural</a></li>',
                        '<li><a href="sprint4-cultural.html">Sprint 04 Cultural</a>',
                    '</li>',
                '</ul>',
                '</li>',
                '<li><a href="#">Contact</a></li>',
            '</ul>'
        ].join("\n")
        document.getElementById('navbar_id').innerHTML += html
    }else{
        var html = [
                '<ul>',
                    '<li><a href="index.html">Home</a>',
                    '<li><a href="#"id="top">Technical Blogs</a>',
                    '<!-- First Tier Drop Down -->',
                        '<ul>', 
                            '<li><a href="blog/sprint1-technical.html">Sprint 01 Technical</a></li>',
                            '<li><a href="blog/sprint2-technical.html">Sprint 02 Technical</a></li>',
                            '<li><a href="blog/sprint3-technical.html">Sprint 03 Technical</a></li>',
                            '<li><a href="blog/sprint4-technical.html">Sprint 04 Technical</a></li>',
                        '</ul>',        
                    '</li>',
                    '<li><a href="#">Cultural Blogs</a>',
                    '<!-- First Tier Drop Down -->',
                        '<ul>',
                            '<li><a href="blog/sprint1-cultural.html">Sprint 01 Cultural</a></li>',
                            '<li><a href="blog/sprint2-cultural.html">Sprint 02 Cultural</a></li>',
                            '<li><a href="blog/sprint3-cultural.html">Sprint 03 Cultural</a></li>',
                            '<li><a href="blog/sprint4-cultural.html">Sprint 04 Cultural</a>',
                        '</li>',
                    '</ul>',
                    '</li>',
                    '<li><a href="#">Contact</a></li>',
                '</ul>'
        ].join("\n")
        document.getElementById('navbar_home_id').innerHTML += html
    }
}
/*
# Add an event listener to the window
*/
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Add window.addEventListener')
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
}
/*
# Shell of myFunction()
*/
function myFunction() {
    console.log('myFunction()')
}

