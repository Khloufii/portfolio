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
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    
    function setActiveNavItem() {
        let index = sections.length;
        
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navItems.forEach(item => item.classList.remove('active'));
        navItems[index]?.classList.add('active');
    }
    
    window.addEventListener('scroll', setActiveNavItem);
    setActiveNavItem();
    
    // Skills Data
    const technicalSkills = [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'PHP', icon: 'fab fa-php' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-server' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Sass', icon: 'fab fa-sass' }
    ];
    
    const softSkills = [
        { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
        { name: 'Teamwork', icon: 'fas fa-users' },
        { name: 'Communication', icon: 'fas fa-comments' },
        { name: 'Creativity', icon: 'fas fa-paint-brush' },
        { name: 'Time Management', icon: 'fas fa-clock' },
        { name: 'Adaptability', icon: 'fas fa-random' }
    ];
    
    const otherSkills = [
        { name: 'UI/UX Design', icon: 'fas fa-pencil-ruler' },
        { name: 'Project Management', icon: 'fas fa-tasks' },
        { name: 'Agile Methodology', icon: 'fas fa-project-diagram' },
        { name: 'Technical Writing', icon: 'fas fa-pen-fancy' }
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
            title: 'Full Stack Developer Intern',
            company: 'Tech Solutions Inc.',
            date: 'June 2022 - August 2022',
            description: 'Developed and maintained web applications using React and Node.js. Collaborated with team members to implement new features and fix bugs.'
        },
        {
            title: 'Web Developer',
            company: 'Freelance',
            date: 'January 2021 - Present',
            description: 'Built responsive websites for small businesses. Worked closely with clients to understand requirements and deliver customized solutions.'
        },
        {
            title: 'IT Support Specialist',
            company: 'Local School District',
            date: 'September 2020 - December 2020',
            description: 'Provided technical support to staff and students. Maintained computer systems and troubleshoot hardware/software issues.'
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
            title: 'E-commerce Platform',
            description: 'A full-featured online store with product management, cart functionality, and payment processing.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive personal portfolio website showcasing projects and skills.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Task Management App',
            description: 'A productivity application for organizing tasks with drag-and-drop functionality.',
            technologies: ['React', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
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
                <div class="project-links">
                    <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="#"><i class="fab fa-github"></i> Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });
    
    // Contact Form
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
    
    // Intersection Observer for scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-item, .timeline-item, .project-card, .contact-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Initialize animations
    animateOnScroll();
    
    // Re-run animations when resizing to handle responsive layout changes
    window.addEventListener('resize', animateOnScroll);
});