/* 
# Wait for the DOM to load and call start()
# https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', start)

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

