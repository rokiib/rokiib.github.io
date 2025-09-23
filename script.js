/* ==========================================================================
   MODERN PORTFOLIO JAVASCRIPT - Mohammad Rokib Hasan
   Modern functionality with project modals and smooth interactions
   ========================================================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

/* 
====================================================================
MAIN INITIALIZATION - MODERN SETUP
DO NOT MODIFY: This ensures everything works properly
==================================================================== 
*/
function initializePortfolio() {
    setupEventListeners();
    setupSmoothScrolling();
    updateCopyrightYear();
    initializeModals();
    
    console.log('🚀 Modern Portfolio initialized successfully!');
}

/* 
====================================================================
EVENT LISTENERS - MODERN INTERACTIONS
TO UPDATE: Modify button behaviors or add new interactions
==================================================================== 
*/
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

    // Resume button functionality - MODIFY THIS to change resume button behavior
    const resumeButtons = document.querySelectorAll('#resume-btn, #mobile-resume-btn');
    resumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // TO UPDATE: Replace this alert with your resume link
            alert('Resume will be available soon! Please contact me for more details.');
            // EXAMPLE: window.open('your-resume-link.pdf', '_blank');
        });
    });

    // Add scroll effects for header
    window.addEventListener('scroll', handleScroll);
}

/* 
====================================================================
SMOOTH SCROLLING - ENHANCED NAVIGATION
DO NOT MODIFY: This makes navigation links scroll smoothly
==================================================================== 
*/
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* 
====================================================================
HEADER SCROLL EFFECT - MODERN TRANSPARENCY
DO NOT MODIFY: This adds nice scroll effect to header
==================================================================== 
*/
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
    }
}

/* 
====================================================================
COPYRIGHT YEAR UPDATE - AUTOMATICALLY UPDATES FOOTER YEAR
DO NOT MODIFY: This keeps your footer year current
==================================================================== 
*/
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* 
====================================================================
PROJECT MODALS - DETAILED PROJECT VIEWS
TO UPDATE: Modify project details and content
==================================================================== 
*/

// Project data with detailed information
const projectData = {
    project1: {
        title: "E-commerce Operations Dashboard",
        subtitle: "Power BI Dashboard for Operational Excellence",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        technologies: ["Power BI", "SQL", "DAX", "Data Modeling"],
        overview: "A comprehensive Power BI dashboard designed to monitor and optimize e-commerce operations across multiple channels. This solution provides real-time insights into key performance indicators, helping stakeholders make data-driven decisions to improve customer satisfaction and operational efficiency.",
        requirements: [
            "Track order fulfillment rates across different regions",
            "Monitor customer satisfaction scores and trends",
            "Analyze team performance metrics",
            "Provide real-time visibility into operational bottlenecks",
            "Create automated reporting for management"
        ],
        solution: [
            "Designed and implemented a comprehensive data model connecting multiple data sources",
            "Created interactive dashboards with drill-down capabilities",
            "Developed custom DAX measures for complex business calculations", 
            "Implemented automated data refresh processes",
            "Built role-based access control for different user groups"
        ],
        findings: [
            "Identified 15% improvement opportunity in order processing time",
            "Discovered regional performance variations of up to 25%",
            "Found correlation between team training completion and customer satisfaction",
            "Uncovered peak hour bottlenecks causing delivery delays"
        ],
        recommendations: [
            "Implement targeted training programs for underperforming regions",
            "Optimize staffing during identified peak hours",
            "Establish automated alerts for performance threshold breaches",
            "Create monthly performance review processes based on dashboard insights"
        ],
        processImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
            "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=300&fit=crop"
        ]
    },
    project2: {
        title: "Customer Churn Analysis",
        subtitle: "Machine Learning Model for Customer Retention",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
        overview: "A comprehensive customer churn analysis project that leverages machine learning techniques to identify at-risk customers and predict churn probability. This solution helps businesses proactively retain customers by understanding key factors that influence customer departure.",
        requirements: [
            "Analyze customer behavior patterns and identify churn indicators",
            "Build predictive model with high accuracy and interpretability",
            "Segment customers based on churn risk levels",
            "Provide actionable insights for retention strategies",
            "Create visualizations for stakeholder communication"
        ],
        solution: [
            "Performed extensive exploratory data analysis on customer dataset",
            "Engineered features including customer lifetime value and engagement scores",
            "Implemented and compared multiple ML algorithms (Random Forest, Logistic Regression, XGBoost)",
            "Optimized model performance through hyperparameter tuning",
            "Created comprehensive visualizations and reporting framework"
        ],
        findings: [
            "Achieved 87% accuracy in churn prediction model",
            "Identified top 5 factors contributing to customer churn",
            "Discovered that customers with low engagement scores are 3x more likely to churn",
            "Found seasonal patterns in churn behavior across different customer segments"
        ],
        recommendations: [
            "Implement early warning system for high-risk customers",
            "Design targeted retention campaigns based on churn risk factors",
            "Improve customer onboarding process to increase early engagement",
            "Develop personalized communication strategies for at-risk segments"
        ],
        processImages: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
            "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=300&fit=crop"
        ]
    },
    project3: {
        title: "Regional Sales Performance Dashboard",
        subtitle: "Excel-Based Analytics for Sales Optimization",
        image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop",
        technologies: ["Excel", "Power Query", "Pivot Tables", "VBA", "Charts"],
        overview: "An interactive Excel dashboard solution that provides comprehensive insights into regional sales performance. This project demonstrates advanced Excel capabilities in data analysis, visualization, and automated reporting for sales teams and management.",
        requirements: [
            "Track sales performance across multiple regions and time periods",
            "Identify top-performing products and sales representatives",
            "Analyze seasonal trends and growth opportunities",
            "Provide easy-to-use interface for non-technical users",
            "Enable data-driven decision making for sales strategy"
        ],
        solution: [
            "Built comprehensive data model using Power Query for data transformation",
            "Created dynamic pivot tables with automated refresh capabilities",
            "Designed interactive dashboard with slicers and filters",
            "Implemented conditional formatting for performance indicators",
            "Developed VBA macros for automated report generation"
        ],
        findings: [
            "Identified 22% performance gap between best and worst performing regions",
            "Discovered untapped growth opportunities worth $250K annually",
            "Found that product bundling increases average order value by 18%",
            "Revealed optimal timing for promotional campaigns based on seasonal data"
        ],
        recommendations: [
            "Implement best practices from top-performing regions company-wide",
            "Focus expansion efforts on identified high-potential markets",
            "Develop product bundling strategies for underperforming regions",
            "Establish quarterly performance reviews using dashboard metrics"
        ],
        processImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
        ]
    }
};

// Initialize modal functionality
function initializeModals() {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', function(e) {
            if (e.target === backdrop) {
                closeProjectModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// Open project modal with detailed content
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    
    if (!modalBackdrop || !modalContent) return;

    // Generate modal HTML content
    modalContent.innerHTML = `
        <div class="relative">
            <!-- Close button -->
            <button onclick="closeProjectModal()" class="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Header with image -->
            <div class="relative h-64 bg-gradient-to-r from-[#48B3AF] to-[#3da39f] rounded-t-2xl overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-80">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute bottom-6 left-6 right-6 text-white">
                    <h2 class="text-3xl font-bold mb-2">${project.title}</h2>
                    <p class="text-lg opacity-90">${project.subtitle}</p>
                </div>
            </div>

            <div class="p-8">
                <!-- Technologies -->
                <div class="mb-8">
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="bg-[#48B3AF]/10 text-[#48B3AF] text-sm font-semibold px-3 py-1 rounded-full">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <!-- Project Overview -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                    <p class="text-gray-700 leading-relaxed">${project.overview}</p>
                </div>

                <!-- Requirements -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
                    <ul class="space-y-2">
                        ${project.requirements.map(req => `
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#48B3AF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-gray-700">${req}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Process Images -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Process & Implementation</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        ${project.processImages.map(img => `
                            <img src="${img}" alt="Process visualization" class="w-full h-48 object-cover rounded-lg">
                        `).join('')}
                    </div>
                </div>

                <!-- Solution -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Solution Approach</h3>
                    <ul class="space-y-2">
                        ${project.solution.map(sol => `
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-[#48B3AF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-gray-700">${sol}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Findings -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Key Findings</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${project.findings.map(finding => `
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-[#48B3AF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">${finding}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Recommendations -->
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Recommendations</h3>
                    <ul class="space-y-3">
                        ${project.recommendations.map(rec => `
                            <li class="flex items-start bg-[#48B3AF]/5 p-4 rounded-lg">
                                <svg class="w-5 h-5 text-[#48B3AF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-gray-700">${rec}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Contact CTA -->
                <div class="bg-gradient-to-r from-[#48B3AF] to-[#3da39f] rounded-lg p-6 text-center text-white">
                    <h3 class="text-xl font-semibold mb-2">Interested in Similar Projects?</h3>
                    <p class="mb-4 opacity-90">Let's discuss how I can help with your data analytics needs.</p>
                    <a href="#contact" onclick="closeProjectModal()" class="bg-white text-[#48B3AF] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    `;

    // Show modal with animation
    modalBackdrop.style.display = 'flex';
    modalBackdrop.classList.remove('hidden');
    
    // Trigger animation
    requestAnimationFrame(() => {
        modalBackdrop.classList.add('modal-open');
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (!modalBackdrop) return;

    modalBackdrop.classList.remove('modal-open');
    
    setTimeout(() => {
        modalBackdrop.style.display = 'none';
        modalBackdrop.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

/* 
====================================================================
PERFORMANCE OPTIMIZATION - PRELOADS IMAGES
TO UPDATE: Add your image paths here for better loading
==================================================================== 
*/
function preloadImages() {
    const criticalImages = [
        // TO UPDATE: Add your actual image paths here
        'https://rokiib.github.io/assets/hero.png', // Your hero image
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop', // Project 1
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop', // Project 2
        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=250&fit=crop'  // Project 3
    ];
    
    // Preload images for faster loading
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading after page loads
window.addEventListener('load', preloadImages);

/* 
====================================================================
INTERSECTION OBSERVER - SCROLL ANIMATIONS
Modern scroll-triggered animations
==================================================================== 
*/
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.modern-card, .experience-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations after DOM load
document.addEventListener('DOMContentLoaded', initScrollAnimations);

/* 
====================================================================
ERROR HANDLING - CATCHES AND LOGS ERRORS
DO NOT MODIFY: This helps with debugging
==================================================================== 
*/
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

/* 
====================================================================
UTILITY FUNCTIONS - HELPER FUNCTIONS
TO UPDATE: Modify alert messages or add new functions
==================================================================== 
*/

// Smooth scroll to section with offset
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Show notification (can be used for form submissions, etc.)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-[#48B3AF] text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/* 
====================================================================
CONTACT FORM HANDLING (IF YOU ADD A CONTACT FORM LATER)
TO ADD: Uncomment and modify if you want to add a contact form
==================================================================== 
*/

/*
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // TO UPDATE: Add your form handling logic here
            // Example: send to your backend or email service
            
            showNotification('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}
*/