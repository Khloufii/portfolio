const portfolioData = {
    technicalSkills: [
        "HTML5", "CSS3", "JavaScript", "React.js", "React Native", 
        "PHP (Laravel)", "Python", "Node.js", "Express.js", 
        "MySQL", "MongoDB", "UML", "Git & GitHub", "WordPress",
        "Figma", "Visual Studio Code"
    ],
    softSkills: [
        "Team spirit", "Good analysis", "Good imagination", 
        "Time management", "Good communication", "Teamwork", 
        "Working under pressure"
    ],
    otherSkills: [
        "Photography", "Video editing", "Scriptwriting for series"
    ],
    experiences: [
        {
            position: "Web Developer",
            company: "COMMUNE MEKNÈS",
            period: "01/2023 - 03/2023",
            responsibilities: [
                "Developed web applications"
            ]
        },
        {
            position: "System Manager & Developer",
            company: "TAMSOURI LIVRAISON Salé",
            period: "11/2023 - 01/2024",
            responsibilities: [
                "Managed the system",
                "Updated the system",
                "Developed web and mobile applications"
            ]
        },
        {
            position: "Web & Mobile Developer",
            company: "WEB DONO Meknes",
            period: "04/2023 - 06/2023",
            responsibilities: [
                "Developed web and mobile applications"
            ]
        },
        {
            position: "Web & Mobile Developer",
            company: "HITMAN DIGITAL Meknes",
            period: "03/2024 - 07/2024",
            responsibilities: [
                "Created web and mobile applications",
                "Updated applications",
                "Created REST APIs"
            ]
        }
    ],
    projects: [
        {
            title: "PYESPUUS.COM",
            description: "Multi-vendor e-commerce website",
            technologies: ["HTML", "CSS", "JavaScript", "React.js", "React Native", "Laravel", "MySQL"],
            image: "project1.jpg"
        },
        {
            title: "LOCATION-TAFILALT",
            description: "Website for renting cars, apartments and hotels",
            technologies: ["HTML", "CSS", "JavaScript", "React.js", "Python", "MongoDB"],
            image: "project2.jpg"
        },
        {
            title: "JAWHARA FOOD",
            description: "Restaurant system that manages customer orders and invoices",
            technologies: ["React.js", "Laravel", "MySQL"],
            image: "project3.jpg"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const sections = document.querySelectorAll('.section');
const experienceItems = document.querySelectorAll('.experience-item');
const projectCards = document.querySelectorAll('.project-card');

// Initialize the portfolio
function initPortfolio() {
    // Populate skills
    populateSkills('technical-skills', portfolioData.technicalSkills);
    populateSkills('soft-skills', portfolioData.softSkills);
    populateSkills('other-skills', portfolioData.otherSkills);
    
    // Populate experiences
    populateExperiences();
    
    // Populate projects
    populateProjects();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize animations
    initAnimations();
}

// Populate skills sections
function populateSkills(elementId, skills) {
    const container = document.getElementById(elementId);
    container.innerHTML = skills.map(skill => 
        `<div class="skill-item">${skill}</div>`
    ).join('');
}

// Populate experiences timeline
function populateExperiences() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = portfolioData.experiences.map((exp, index) => {
        const sideClass = index % 2 === 0 ? 'left' : 'right';
        const responsibilities = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
        
        return `
            <div class="experience-item ${sideClass}">
                <div class="experience-content">
                    <h3>${exp.position}</h3>
                    <p><strong>${exp.company}</strong></p>
                    <p><em>${exp.period}</em></p>
                    <ul>${responsibilities}</ul>
                </div>
            </div>
        `;
    }).join('');
}

// Populate projects grid
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map(project => {
        const technologies = project.technologies.map(tech => 
            `<span class="tech-item">${tech}</span>`
        ).join('');
        
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-list">${technologies}</div>
                </div>
            </div>
        `;
    }).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

// Initialize animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe experience items
    document.querySelectorAll('.experience-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe sections for header background change
    const header = document.querySelector('header');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target.id;
                // You can add logic here to change header based on section
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolio);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}