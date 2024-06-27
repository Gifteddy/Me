document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    const homeImg = document.querySelector('.home-img img');

    // Function to apply the theme based on the stored preference or system preference
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            homeImg.src = 'dark-coverimg.png'; // Change to dark mode image
        } else {
            document.documentElement.classList.remove('dark-mode');
            homeImg.src = 'coverimg.png'; // Change to light mode image
        }
    }

    // Toggle dark mode class on the root element
    logo.addEventListener('click', function () {
        const isDarkMode = document.documentElement.classList.toggle('dark-mode');
        
        // Store the preference in local storage
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            homeImg.src = 'coverimgdark.png'; // Change to dark mode image
        } else {
            localStorage.setItem('theme', 'light');
            homeImg.src = 'coverimg.png'; // Change to light mode image
        }
    });

    // Apply the stored theme preference on page load
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        applyTheme(storedTheme);
    } else if (prefersDarkScheme) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for changes in the system theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {  // Only apply if there's no stored user preference
            if (e.matches) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
            const loader = document.querySelector('.loader');

            // Hide the loader after the page has fully loaded
            window.addEventListener('load', function () {
                loader.style.display = 'none';
            });
        });



document.addEventListener('DOMContentLoaded', function () {
const dropdownToggles = document.querySelectorAll('.menu-options');
dropdownToggles.forEach(toggle => {
toggle.addEventListener('click', () => {
toggle.classList.toggle('click');
});
});
});

function rate(star, n) {
    const container = star.closest('.rating-container');
    const stars = container.querySelectorAll('.star');
    const output = container.querySelector('.output');
    
    remove(stars);
    update(stars, n);
    output.innerText = "Rating: " + n + "/5";
}

function update(stars, n) {
    let cls = '';
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        
        stars[i].classList.add(cls);
    }
}

function remove(stars) {
    stars.forEach(star => {
        star.className = "star";
    });
}


var typed = new Typed(".multiple-text", {
    strings: ["AI Measurements", "Design Studio", "Online Store", "Social Network", "Fashion Hub", "And Lots More..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const menuOptions = document.querySelectorAll('.menu-optns');

menuOptions.forEach((menu) => {
  const h3 = menu.querySelector('h3');
  const ul = menu.querySelector('ul');

  h3.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

