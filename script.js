/* ==========================================================================
   PORTFOLIO JAVASCRIPT - Mohammad Rokib Hasan
   Interactive functionality and dynamic content loading
   ========================================================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// ==========================================================================
// MAIN INITIALIZATION
// ==========================================================================

function initializePortfolio() {
    loadStaticContent();
    setupEventListeners();
    setupSmoothScrolling();
    updateCopyrightYear();
    
    console.log('🚀 Portfolio initialized successfully!');
}

// ==========================================================================
// STATIC CONTENT LOADING (Using original content)
// ==========================================================================

function loadStaticContent() {
    loadHeroSection();
    loadAboutSection();
    loadSkillsSection();
    loadExperienceSection();
    loadProjectsSection();
    loadContactSection();
}

function loadHeroSection() {
    const heroName = document.getElementById('hero-name');
    const heroTagline = document.getElementById('hero-tagline');
    const profileImage = document.getElementById('profile-image');
    
    if (heroName) {
        heroName.innerHTML = `
            MOHAMMAD <br>
            <span class="highlight-text">ROKIB</span> <br>
            HASAN
        `;
    }
    
    if (heroTagline) {
        heroTagline.innerHTML = `
            I help people finding <br> 
            <span class="highlight-text font-semibold glow-text">insights through data</span>
        `;
    }
    
    if (profileImage) {
        profileImage.src = "https://placehold.co/400x400/121626/fff?text=Photo";
        profileImage.alt = "Mohammad Rokib Hasan";
    }
}

function loadAboutSection() {
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        aboutText.textContent = "I started my career in 2017 as a Customer Service Associate, and it didn't take long for me to discover the power of Excel. I still remember the first time I updated a file that helped over 200 colleagues serve customers more smoothly—it felt like I'd found a superpower. That spark led me to explore data analytics in 2021. Since then, I've been learning and applying tools like Power BI and SQL to solve real-world problems, whether at work, in organizations I collaborate with, or even for friends and family. My goal is simple: turn everyday data into insights that make decisions easier and processes smarter.";
    }
}

function loadSkillsSection() {
    const skillsDescription = document.getElementById('skills-description');
    const technicalSkills = document.getElementById('technical-skills');
    const softSkills = document.getElementById('soft-skills');
    
    if (skillsDescription) {
        skillsDescription.textContent = "I've built a solid skill set in both technical and interpersonal areas, helping me transform data into actionable insights and collaborate effectively with others.";
    }
    
    if (technicalSkills) {
        const techSkills = ["Microsoft Excel", "Google Sheet", "Power BI", "SQL"];
        technicalSkills.innerHTML = techSkills.map(skill => `
            <div class="flex items-center space-x-4 border-b border-gray-700 pb-4">
                <span class="text-lg font-medium">${skill}</span>
            </div>
        `).join('');
    }
    
    if (softSkills) {
        const softSkillsList = ["Data Storytelling", "Problem-Solving Mindset", "Attention to Detail", "Team Player"];
        softSkills.innerHTML = softSkillsList.map(skill => `
            <div class="flex items-center space-x-4 border-b border-gray-700 pb-4">
                <span class="text-lg font-medium">${skill}</span>
            </div>
        `).join('');
    }
}

function loadExperienceSection() {
    const experienceContainer = document.getElementById('experience-container');
    
    if (experienceContainer) {
        const experiences = [
            {
                title: "Route Dispatcher",
                company: "Daraz Bangladesh Limited",
                duration: "Aug 2024 – Present",
                description: "Planned and optimized delivery routes for maximum efficiency and timely deliveries. Monitored driver performance, reducing delays and improving customer experience. Learned to analyze logistics data and spot operational bottlenecks."
            },
            {
                title: "Operation Associate",
                company: "Daraz Bangladesh Limited",
                duration: "Oct 2022 – Jul 2024",
                description: "Coordinated day-to-day warehouse and logistics operations. Analyzed operational data to identify inefficiencies and suggest process improvements. Collaborated with various teams to ensure smooth and timely order fulfillment."
            },
            {
                title: "Jr. Executive",
                company: "Xtreme Solution",
                duration: "Aug 2021 – Sep 2021",
                description: "Coordinated day-to-day operations and supported process improvements to enhance service quality. Worked closely with cross-functional teams, streamlining workflows and boosting efficiency. Discovered passion for using data to solve business problems."
            },
            {
                title: "Customer Service Associate",
                company: "Genex Infosys Limited",
                duration: "Dec 2017 – Aug 2020",
                description: "Handled 120+ customers daily, achieved A-Bucket for 15 months straight, and won 2 Best Employee Awards. Promoted to team mentor in 3 months and trained 25–30 people, leading them to win Best Team Award. Built strong communication and mentoring skills."
            }
        ];
        
        experienceContainer.innerHTML = experiences.map(job => `
            <div class="bg-gray-800 rounded-xl p-6 text-left shadow-lg transition-all hover:transform hover:scale-105">
                <div class="flex justify-between items-baseline mb-2">
                    <h3 class="text-2xl font-bold text-white">${job.title}</h3>
                    <p class="text-base font-bold text-gray-400">${job.duration}</p>
                </div>
                <p class="text-lg text-gray-400 mb-2">${job.company}</p>
                <p class="text-sm leading-relaxed text-gray-300">${job.description}</p>
            </div>
        `).join('');
    }
}

function loadProjectsSection() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer) {
        const projects = [
            {
                title: "E-commerce Operations Dashboard",
                description: "Interactive Power BI dashboard tracking key operational metrics including order fulfillment, customer satisfaction, and team performance.",
                image: "https://placehold.co/600x400/121626/fff?text=Dashboard+Thumbnail",
                technologies: ["Power BI", "SQL", "Data Visualization"],
                link: "#",
                icon: "layers"
            },
            {
                title: "Customer Churn Analysis",
                description: "Analyzed customer behavior data to identify key factors leading to churn, creating a predictive model to proactively retain at-risk customers.",
                image: "https://placehold.co/600x400/121626/fff?text=Churn+Analysis+Thumbnail",
                technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
                link: "#",
                icon: "clock"
            },
            {
                title: "Regional Sales Performance",
                description: "Developed an interactive Excel dashboard to track and visualize sales performance across different regions, identifying top-performing areas and growth opportunities.",
                image: "https://placehold.co/600x400/121626/fff?text=Sales+Performance+Thumbnail",
                technologies: ["Excel", "Data Cleaning", "Reporting"],
                link: "#",
                icon: "grid"
            }
        ];
        
        const iconMap = {
            'layers': '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>',
            'clock': '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
            'grid': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>'
        };
        
        projectsContainer.innerHTML = projects.map(project => `
            <div class="bg-gray-800 rounded-xl p-6 text-left shadow-lg">
                <div class="flex items-center space-x-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${iconMap[project.icon]}
                    </svg>
                    <h3 class="text-xl font-bold text-white">${project.title}</h3>
                </div>
                <img src="${project.image}" alt="${project.title} Thumbnail" class="w-full h-auto rounded-lg mb-4">
                <p class="text-sm text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex space-x-4">
                    <a href="${project.link}" class="bg-teal-500 text-black font-semibold py-2 px-4 rounded-xl shadow-lg hover:bg-teal-400 transition-colors duration-300 text-sm flex items-center space-x-2">
                        <span>View Details</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        `).join('');
    }
}

function loadContactSection() {
    const contactCards = document.getElementById('contact-cards');
    
    if (contactCards) {
        contactCards.innerHTML = `
            <!-- Email Card -->
            <div class="contact-card flex flex-col items-center justify-center text-center">
                <div class="contact-icon-container icon-email mb-4">
                    <i class="fa-solid fa-envelope contact-icon"></i>
                </div>
                <h3 class="text-lg font-semibold text-white">Email</h3>
                <a href="mailto:rokib.hasan@email.com" class="text-sm text-gray-400 hover:underline">rokib.hasan@email.com</a>
            </div>
            
            <!-- WhatsApp Card -->
            <div class="contact-card flex flex-col items-center justify-center text-center">
                <div class="contact-icon-container icon-whatsapp mb-4">
                    <i class="fa-brands fa-whatsapp contact-icon"></i>
                </div>
                <h3 class="text-lg font-semibold text-white">WhatsApp</h3>
                <a href="https://wa.me/1234567890" class="text-sm text-gray-400 hover:underline">+880 1234 567890</a>
            </div>
            
            <!-- LinkedIn Card -->
            <div class="contact-card flex flex-col items-center justify-center text-center">
                <div class="contact-icon-container icon-linkedin mb-4">
                    <i class="fa-brands fa-linkedin contact-icon"></i>
                </div>
                <h3 class="text-lg font-semibold text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/mohammad-rokib-hasan" target="_blank" class="text-sm text-gray-400 hover:underline">mohammad-rokib-hasan</a>
            </div>
        `;
    }
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================

function setupEventListeners() {
    // Mobile menu functionality
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Resume button functionality
    const resumeButtons = document.querySelectorAll('#resume-btn, #mobile-resume-btn');
    resumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume will be available soon!');
        });
    });

    // Add scroll effects
    window.addEventListener('scroll', handleScroll);
}

function setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('backdrop-blur-lg');
    } else {
        header.classList.remove('backdrop-blur-lg');
    }
}

function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
