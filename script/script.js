document.addEventListener('DOMContentLoaded', function () {
            const menuBars = document.getElementById('menu-bars');
            const header = document.getElementById('header');
            const body = document.body;
            const navItems = [
                document.getElementById('nav-1'),
                document.getElementById('nav-2'),
                document.getElementById('nav-3'),
                document.getElementById('nav-4'),
                document.getElementById('nav-5')
            ];

            let isMenuOpen = false;

            function toggleMenu() {
                console.log('Menu toggle clicked!');
                isMenuOpen = !isMenuOpen;

                // Toggle hamburger animation
                menuBars.classList.toggle('change');

                if (isMenuOpen) {
                    console.log('Opening menu');
                    
                    // Prevent body scroll
                    body.classList.add('menu-open');
                    
                    // Open menu
                    header.classList.remove('overlay-slide-left');
                    header.classList.add('overlay-slide-right');

                    // Add slide-in animations to nav items
                    navItems.forEach((item, index) => {
                        if (item) {
                            item.classList.remove(`slide-out-${index + 1}`);
                            item.classList.add(`slide-in-${index + 1}`);
                        }
                    });

                    // Add slide-in for login section
                    const rightSection = document.querySelector('.right .login');
                    if (rightSection) {
                        rightSection.classList.remove('slide-out-5');
                        rightSection.classList.add('slide-in-5');
                    }
                } else {
                    console.log('Closing menu');
                    
                    // Allow body scroll
                    body.classList.remove('menu-open');
                    
                    // Close menu
                    header.classList.remove('overlay-slide-right');
                    header.classList.add('overlay-slide-left');

                    // Add slide-out animations to nav items
                    navItems.forEach((item, index) => {
                        if (item) {
                            item.classList.remove(`slide-in-${index + 1}`);
                            item.classList.add(`slide-out-${index + 1}`);
                        }
                    });

                    // Add slide-out for login section
                    const rightSection = document.querySelector('.right .login');
                    if (rightSection) {
                        rightSection.classList.remove('slide-in-5');
                        rightSection.classList.add('slide-out-5');
                    }
                }
            }

            // Add event listener to hamburger menu
            if (menuBars) {
                console.log('Menu bars element found, adding click listener');
                menuBars.addEventListener('click', toggleMenu);

                // Also add touch event for mobile devices
                menuBars.addEventListener('touchstart', function (e) {
                    e.preventDefault();
                    toggleMenu();
                });
            } else {
                console.error('Menu bars element not found!');
            }

            // Close menu when clicking on a nav link
            const navLinks = document.querySelectorAll('nav li a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default for demo
                    if (isMenuOpen) {
                        toggleMenu();
                    }
                    console.log('Clicked:', link.textContent);
                });
            });

            // Close menu when clicking on overlay background
            if (header) {
                header.addEventListener('click', e => {
                    if (e.target === header && isMenuOpen) {
                        toggleMenu();
                    }
                });
            }

            // Handle escape key to close menu
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && isMenuOpen) {
                    toggleMenu();
                }
            });
        });