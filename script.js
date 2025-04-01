document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Skills Data
    const technicalSkills = [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'React Native', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Laravel', icon: 'fab fa-laravel' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'UML', icon: 'fas fa-project-diagram' },
        { name: 'WordPress', icon: 'fab fa-wordpress' },
        { name: 'Figma', icon: 'fab fa-figma' }
    ];
    
    const softSkills = [
        { name: 'Teamwork', icon: 'fas fa-users' },
        { name: 'Analytical Thinking', icon: 'fas fa-brain' },
        { name: 'Creativity', icon: 'fas fa-lightbulb' },
        { name: 'Time Management', icon: 'fas fa-clock' },
        { name: 'Communication', icon: 'fas fa-comments' },
        { name: 'Working Under Pressure', icon: 'fas fa-fire' },
        { name: 'Agile Methodology', icon: 'fas fa-tasks' }
    ];
    
    const otherSkills = [
        { name: 'Photography', icon: 'fas fa-camera' },
        { name: 'Video Editing', icon: 'fas fa-video' },
        { name: 'Script Writing', icon: 'fas fa-pen-fancy' }
    ];
    
    // Populate Skills
    populateSkills('technical-skills', technicalSkills);
    populateSkills('soft-skills', softSkills);
    populateSkills('other-skills', otherSkills);
    
    function populateSkills(elementId, skills) {
        const container = document.getElementById(elementId);
        
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.innerHTML = `
                <i class="${skill.icon}"></i>
                <p>${skill.name}</p>
            `;
            container.appendChild(skillElement);
        });
    }
    
    // Experience Data
    const experiences = [
        {
            title: 'Web Developer',
            company: 'Meknes Municipality',
            date: 'Jan 2023 - Mar 2023',
            description: 'Developed web applications for municipal services and internal systems.'
        },
        {
            title: 'System Developer',
            company: 'Tamsouri Delivery',
            date: 'Nov 2023 - Jan 2024',
            description: 'Managed and updated delivery system, developed web and mobile applications for logistics management.'
        },
        {
            title: 'Full Stack Developer',
            company: 'Web Dono',
            date: 'Apr 2023 - Jun 2023',
            description: 'Developed web and mobile applications for various clients, implemented RESTful APIs.'
        },
        {
            title: 'Full Stack Developer',
            company: 'Hitman Digital',
            date: 'Mar 2024 - Jul 2024',
            description: 'Created web and mobile applications, maintained existing systems, and developed REST APIs.'
        }
    ];
    
    // Populate Experience
    const timeline = document.getElementById('experience-timeline');
    
    experiences.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'timeline-item';
        expElement.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="timeline-date">${exp.date}</p>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(expElement);
    });
    
    // Projects Data
    const projects = [
        {
            title: 'Pyespuus E-commerce',
            description: 'Multi-vendor e-commerce platform with vendor management system.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'MySQL'],
            image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            demo: '#',
            code: '#'
        },
        {
            title: 'Pyespuus Mobile App',
            description: 'Mobile application version of the e-commerce platform with native features.',
            technologies: ['React Native', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            demo: '#',
            code: '#'
        },
        {
            title: 'Tafilalt Rental System',
            description: 'Car, apartment and hotel rental platform with booking management.',
            technologies: ['React', 'Python', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            demo: '#',
            code: '#'
        },
        {
            title: 'Jawhara Food Restaurant System',
            description: 'Restaurant management system for orders and billing.',
            technologies: ['React', 'Laravel', 'MySQL'],
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            demo: '#',
            code: '#'
        }
    ];
    
    // Populate Projects
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                    <a href="${project.code}" target="_blank"><i class="fab fa-github"></i> Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });
    
    // Animation on scroll
    const animateOnScroll = () => {
        const animateElements = document.querySelectorAll('.skill-item, .timeline-item, .project-card, .contact-item, .contact-form, .social-links a');
        const windowHeight = window.innerHeight;
        const triggerBottom = windowHeight * 0.85;

        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animate');
                
                // Special animation for contact items
                if (element.classList.contains('contact-item')) {
                    const index = Array.from(document.querySelectorAll('.contact-item')).indexOf(element);
                    element.style.transitionDelay = `${index * 0.2}s`;
                }
            }
        });
    };

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Animate contact form after a delay
    setTimeout(() => {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) contactForm.classList.add('animate');
    }, 500);
    
    // Animate social links with delay
    setTimeout(() => {
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('animate');
            }, index * 300);
        });
    }, 1000);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});