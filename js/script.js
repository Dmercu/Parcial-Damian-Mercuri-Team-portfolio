// Script for side navigation
function untref_open() {
  let x = document.getElementById('mySidebar')
  x.style.width = '300px'
  x.style.paddingTop = '10%'
  x.style.display = 'block'
}

// Close side navigation
function untref_close() {
  document.getElementById('mySidebar').style.display = 'none'
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  let x = document.getElementById('navDemo')
  if (x.className.indexOf('untref-show') == -1) {
    x.className += ' untref-show'
  } else {
    x.className = x.className.replace(' untref-show', '')
  }
}
