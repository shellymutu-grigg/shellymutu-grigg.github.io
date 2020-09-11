// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

 function start () {
     for(var i = document.querySelectorAll.length; i > 0; i--){
            console.log('document.getElementById("navbar"): '+ document.getElementById('navbar'))
     }
     var navbar = document.getElementById('navbar')
     myFunction()
   }
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
})
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
//     console.log('myFunction(navbar)'+ document.getElementById('navbar'))
//     var sticky = document.getElementById('navbar').offsetTop;
//     if (window.pageYOffset >= sticky) {
//         document.getElementById('navbar').classList.add("sticky")
//   } else {
//     document.getElementById('navbar').classList.remove("sticky")
//   }
}

