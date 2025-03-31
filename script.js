document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const colorBtn = document.getElementById("color-btn");
    const themeBtn = document.getElementById("theme-btn");
    const sidebar = document.querySelector(".sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    const colorOptions = document.getElementById("color-options");
    const colorCircles = document.querySelectorAll(".color-circle");
    const professionText = document.getElementById("profession-text");
    const body = document.body;
    const educationSection = document.querySelector(".education");
    const servicesContainer = document.querySelector(".services-content");
    const serviceTitles = document.querySelectorAll(".service-title");
    const sectionTitle = document.querySelector(".section-title");
    const serviceIcons = document.querySelectorAll(".service-box i");
    const colorChangeElements = document.querySelectorAll(".color-change");
    const contactForm = document.querySelector("form"); 
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const moreAboutBtn = document.getElementById("more-about-btn");
    const servicesLink = document.getElementById("services-link");
    const projectLink = document.getElementById("projects-link");
    const contactLink = document.getElementById("contact-link");
    const hireLink = document.getElementById("hire-btn");
    const homePage = document.getElementById("home-page");
    const aboutPage = document.getElementById("about-page");
    const servicesPage = document.getElementById("services-page");
    const projectPage = document.getElementById("projects-page");
    const contactPage = document.getElementById("contact-page");
    
    // Function to show a specific page and hide others
    function showPage(pageToShow, activeLink) {
        homePage.classList.remove('active');
        aboutPage.classList.remove('active');
        servicesPage.classList.remove('active');
        projectPage.classList.remove('active');
        contactPage.classList.remove('active');

        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        servicesLink.classList.remove('active');
        projectLink.classList.remove('active');
        contactLink.classList.remove('active');

        pageToShow.classList.add('active');
        activeLink.classList.add('active');
    }
    
    // Event listeners for sidebar links
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(homePage, homeLink);
        setActiveLink(homeLink)
    });
    
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(aboutPage, aboutLink);
        setActiveLink(aboutLink)
    });

    moreAboutBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(aboutPage, aboutLink);
        setActiveLink(aboutLink)
    });

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(servicesPage, servicesLink);
        setActiveLink(servicesLink)
    });

    projectLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(projectPage, projectLink);
        setActiveLink(projectLink)
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(contactPage, contactLink);
        setActiveLink(contactLink)
    });

    hireLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        showPage(contactPage, contactLink);
        setActiveLink(contactLink)
    });



    function setActiveLink(activeLink) {
        const links = [homeLink, aboutLink, servicesLink, projectLink, contactLink];
        links.forEach(link => {
            link.classList.remove('active'); // Remove active class from all links
        });
        activeLink.classList.add('active'); // Add active class to the clicked link
    }

    document.querySelectorAll('.sidebar li a').forEach(link => link.classList.remove('active'));

    // Show home page by default
    showPage(homePage, homeLink);

    // Function to rotate button
    function rotateButton(button) {
        button.classList.add("rotate"); // Add rotation class
        setTimeout(() => button.classList.remove("rotate"), 500); // Remove after animation
    }

    // Toggle color options
    colorBtn.addEventListener("click", () => {
        colorOptions.classList.toggle("hidden");
        rotateButton(colorBtn); // Rotate the button
    });

    // Change home page theme color
    colorCircles.forEach(circle => {
        circle.addEventListener("click", (event) => {
            const newColor = event.target.getAttribute("data-color");
            document.documentElement.style.setProperty("--theme-color", newColor);
            colorOptions.classList.add("hidden"); 

            // Update all elements with class 'color-change'
            colorChangeElements.forEach(el => {
                el.style.color = newColor;
            });

            // Update sidebar list items dynamically
            const sidebarLinks = document.querySelectorAll('.sidebar li a');
            sidebarLinks.forEach(link => {
                link.style.color = newColor; // Set the color directly
            });

            // Set the active link color
            const activeLink = document.querySelector('.sidebar li a.active');
            if (activeLink) {
                activeLink.style.color = newColor; // Set active link color
            }

            // Update submit button color
            const submitButton = document.querySelector('.submit-btn');
            if (submitButton) {
                submitButton.style.backgroundColor = newColor; // Set submit button color
            }
        });
    });

    // Toggle dark/light mode
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        themeBtn.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀";
        rotateButton(themeBtn); // Rotate the button
    });

    // Toggle sidebar with hamburger menu
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when "X" icon is clicked
    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // List of professions for typing effect
    const professions = ["Web Developer", "Web Designer", "Graphic Designer", "YouTuber"];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = professions[professionIndex];
        if (isDeleting) {
            professionText.textContent = currentText.substring(0, charIndex--);
        } else {
            professionText.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // Change about page theme color
    colorCircles.forEach(circle => {
        circle.addEventListener("click", () => {
            const selectedColor = circle.getAttribute("data-color");
            document.documentElement.style.setProperty("--theme-color", selectedColor);
            if (educationSection) {
                educationSection.style.borderLeftColor = selectedColor;
                educationSection.querySelectorAll(".timeline-dot").forEach(dot => {
                    dot.style.backgroundColor = selectedColor;
                });
                educationSection.querySelectorAll(".degree").forEach(deg => {
                    deg.style.color = selectedColor;
                });
                educationSection.style.borderLeftColor = selectedColor;
                educationSection.querySelectorAll(".edu-section-title").forEach(dot => {
                    dot.style.color = selectedColor;
                });
            }
        });
    });

    // Change services page theme color
    colorCircles.forEach(circle => {
        circle.addEventListener("click", (event) => {
            const newColor = event.target.getAttribute("data-color");
            document.documentElement.style.setProperty("--theme-color", newColor);
            
            // Apply color change to Services Section
            sectionTitle.style.color = newColor;
            serviceTitles.forEach(title => title.style.color = newColor);
            colorOptions.classList.add("hidden"); // Hide color options after selection
        });
    });

    function changeIconColors() {
        const colors = ["#FF5733", "#27AE60", "#2980B9", "#E91E63", "#9B59B6"];
        let index = 0;

        setInterval(() => {
            serviceIcons.forEach(icon => {
                icon.style.color = colors[index];
            });
            index = (index + 1) % colors.length;
        }, 1500);
    }
    changeIconColors();
});



