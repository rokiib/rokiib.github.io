/* ==========================================================================
   PORTFOLIO CONTENT CONFIGURATION
   🎯 Edit this file to update your portfolio content easily
   💡 No coding knowledge required - just change the text between quotes
   ========================================================================== */

// 📝 PERSONAL INFORMATION
// Update these with your real information
const portfolioConfig = {
    personal: {
        // 👤 BASIC INFO
        name: "MOHAMMAD ROKIB HASAN",
        firstName: "MOHAMMAD",
        highlightedName: "ROKIB", 
        lastName: "HASAN",
        tagline: "I help people finding insights through data",
        
        // 🖼️ PROFILE IMAGE
        // Replace this URL with your actual photo
        profileImage: "https://placehold.co/400x400/121626/fff?text=Photo",
        
        // 📧 CONTACT INFORMATION
        // Update with your real contact details
        email: "rokibchi@email.com",
        whatsappNumber: "8801866607355", // Format: country code + number (no spaces)
        linkedinUsername: "Rokib Hasan",
        linkedinUrl: "https://www.linkedin.com/in/rokiib/",
        
        // 📄 RESUME LINK
        // Add your resume link here (Google Drive, Dropbox, etc.)
        resumeLink: "#", // Replace with your actual resume link
        
        // ℹ️ ABOUT SECTION
        aboutText: "I started my career in 2017 as a Customer Service Associate, and it didn't take long for me to discover the power of Excel. I still remember the first time I updated a file that helped over 200 colleagues serve customers more smoothly—it felt like I'd found a superpower. That spark led me to explore data analytics in 2021. Since then, I've been learning and applying tools like Power BI and SQL to solve real-world problems, whether at work, in organizations I collaborate with, or even for friends and family. My goal is simple: turn everyday data into insights that make decisions easier and processes smarter."
    },

    // 🛠️ SKILLS SECTION
    skills: {
        description: "I've built a solid skill set in both technical and interpersonal areas, helping me transform data into actionable insights and collaborate effectively with others.",
        
        // 💻 TECHNICAL SKILLS
        // Add or remove skills as needed
        technical: [
            "Microsoft Excel",
            "Google Sheet", 
            "Power BI",
            "SQL"
            // Add more skills like: "Python", "Tableau", "R", etc.
        ],
        
        // 🤝 SOFT SKILLS  
        // Add or remove skills as needed
        soft: [
            "Data Storytelling",
            "Problem-Solving Mindset", 
            "Attention to Detail",
            "Team Player"
            // Add more skills like: "Communication", "Leadership", etc.
        ]
    },

    // 💼 EXPERIENCE SECTION
    // Update with your actual work experience
    experience: [
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
    ],

    // 🚀 PROJECTS SECTION
    // Update with your actual projects
    projects: [
        {
            title: "E-commerce Operations Dashboard",
            description: "Interactive Power BI dashboard tracking key operational metrics including order fulfillment, customer satisfaction, and team performance.",
            
            // 🖼️ Replace with your actual project screenshot
            image: "https://placehold.co/600x400/121626/fff?text=Dashboard+Thumbnail",
            
            // 🛠️ Technologies used
            technologies: ["Power BI", "SQL", "Data Visualization"],
            
            // 🔗 Add your actual project link (GitHub, live demo, etc.)
            link: "#", // Replace with actual project link
            
            // 🎨 Icon type (keep as is or change to: "layers", "clock", "grid")
            icon: "layers"
        },
        {
            title: "Customer Churn Analysis", 
            description: "Analyzed customer behavior data to identify key factors leading to churn, creating a predictive model to proactively retain at-risk customers.",
            image: "https://placehold.co/600x400/121626/fff?text=Churn+Analysis+Thumbnail",
            technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
            link: "#", // Replace with actual project link
            icon: "clock"
        },
        {
            title: "Regional Sales Performance",
            description: "Developed an interactive Excel dashboard to track and visualize sales performance across different regions, identifying top-performing areas and growth opportunities.",
            image: "https://placehold.co/600x400/121626/fff?text=Sales+Performance+Thumbnail", 
            technologies: ["Excel", "Data Cleaning", "Reporting"],
            link: "#", // Replace with actual project link
            icon: "grid"
        }
        
        // 📝 TO ADD MORE PROJECTS:
        // Copy the structure above and add new projects
        // Available icons: "layers", "clock", "grid"
    ]
};

// 🎨 THEME CONFIGURATION
// You can modify colors if needed
const themeConfig = {
    colors: {
        primary: "#42E4D4", // Teal accent color
        primaryHover: "#68F4E8",
        secondary: "#f97316", // Orange for secondary elements
        background: "#121626", // Dark blue background
        cardBackground: "#1a1e2f"
    }
};

/* ==========================================================================
   📋 INSTRUCTIONS FOR NON-CODERS:
   
   1. 📧 UPDATE CONTACT INFO:
      - Change email, phone, LinkedIn username
      - Add your resume link
   
   2. 🖼️ ADD YOUR PHOTO:
      - Upload your photo to a service like imgur.com or use Google Drive
      - Replace the profileImage URL
   
   3. 🚀 UPDATE PROJECTS:
      - Change project descriptions
      - Add real project links
      - Upload project screenshots and replace image URLs
   
   4. 💼 UPDATE EXPERIENCE:
      - Modify job titles, companies, dates
      - Update job descriptions
   
   5. 🛠️ UPDATE SKILLS:
      - Add or remove technical skills
      - Add or remove soft skills
   
   6. ℹ️ PERSONALIZE ABOUT:
      - Rewrite the about section in your own words
   
   ⚠️  IMPORTANT: Only edit text between quotes " "
   ⚠️  Don't change punctuation like commas, brackets, or semicolons

   ========================================================================== */
