document.addEventListener('DOMContentLoaded', function () {
  const menuBars = document.getElementById('menu-bars')
  const header = document.getElementById('header')
  const navBar1 = document.getElementById('nav-1')
  const navBar2 = document.getElementById('nav-2')
  const navBar3 = document.getElementById('nav-3')
  const navBar4 = document.getElementById('nav-4')
  const navBar5 = document.getElementById('nav-5')

  let isMenuOpen = false

  function toggleMenu () {
    console.log('Menu toggle clicked!') // Debug log
    isMenuOpen = !isMenuOpen

    // Toggle hamburger animation
    menuBars.classList.toggle('change')

    if (isMenuOpen) {
      console.log('Opening menu') // Debug log
      // Open menu
      header.classList.remove('overlay-slide-left')
      header.classList.add('overlay-slide-right')

      // Add slide-in animations to nav items
      navBar1.classList.remove('slide-out-1')
      navBar1.classList.add('slide-in-1')
      navBar2.classList.remove('slide-out-2')
      navBar2.classList.add('slide-in-2')
      navBar3.classList.remove('slide-out-3')
      navBar3.classList.add('slide-in-3')
      navBar4.classList.remove('slide-out-4')
      navBar4.classList.add('slide-in-4')
      navBar5.classList.remove('slide-out-5')
      navBar5.classList.add('slide-in-5')

      // Add slide-in for login section
      const rightSection = document.querySelector('.right')
      if (rightSection) {
        rightSection.classList.remove('slide-out-5')
        rightSection.classList.add('slide-in-5')
      }
    } else {
      console.log('Closing menu') // Debug log
      // Close menu
      header.classList.remove('overlay-slide-right')
      header.classList.add('overlay-slide-left')

      // Add slide-out animations to nav items
      navBar1.classList.remove('slide-in-1')
      navBar1.classList.add('slide-out-1')
      navBar2.classList.remove('slide-in-2')
      navBar2.classList.add('slide-out-2')
      navBar3.classList.remove('slide-in-3')
      navBar3.classList.add('slide-out-3')
      navBar4.classList.remove('slide-in-4')
      navBar4.classList.add('slide-out-4')
      navBar5.classList.remove('slide-in-5')
      navBar5.classList.add('slide-out-5')

      // Add slide-out for login section
      const rightSection = document.querySelector('.right')
      if (rightSection) {
        rightSection.classList.remove('slide-in-5')
        rightSection.classList.add('slide-out-5')
      }
    }
  }

  // Make sure menuBars element exists before adding event listener
  if (menuBars) {
    console.log('Menu bars element found, adding click listener') // Debug log
    menuBars.addEventListener('click', toggleMenu)

    // Also add touch event for mobile devices
    menuBars.addEventListener('touchstart', function (e) {
      e.preventDefault()
      toggleMenu()
    })
  } else {
    console.error('Menu bars element not found!')
  }

  // Optional: Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('nav li a')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu()
      }
    })
  })

  // Optional: Close menu when clicking outside (on overlay background)
  if (header) {
    header.addEventListener('click', e => {
      if (e.target === header && isMenuOpen) {
        toggleMenu()
      }
    })
  }
})
