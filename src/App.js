import React, { useState, useEffect } from 'react';
import './App.css';
import { projects } from './projectData';



function App() {
  

  const [chatContent, setChatContent] = useState("Hey, welcome to my portfolio! I’m AIME, and I’ll be your guide. Feel free to explore, and I’ll be here to help you navigate the site. Let’s make sure everything is smooth and easy!");

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section, .section1, .section2, .section3, .section4');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      console.log(`Section ID: ${section.id}, Position: ${rect.top}`); // Log each section's ID and position
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        handleSectionChange(section.id); // Call handleSectionChange with the  section ID
      }
    });
  };

  const handleSectionChange = (sectionId) => {
    switch (sectionId) {
      case 'hero':
        setChatContent("Hey, welcome to my portfolio! I’m AIME, and I’ll be your guide. Feel free to explore, and I’ll be here to help you navigate the site. Let’s make sure everything is smooth and easy!");
        break;
      case 'aboutmee':
        setChatContent("This is a bit about moi! If you want to know what makes me tick, just scroll down and check out what I’ve been up to!");
        break;
      case 'skills':
        setChatContent("Here’s where you can explore my skills! Click on the folders to see what I’ve got, from coding to design and more.");
        break;
      case 'project-vault':
        setChatContent("Welcome to the Project Vault! Press the vault door to unlock and explore my projects.");
        break;
      case 'contact':
        setChatContent("Feel free to reach out if you have any questions!");
        break;
      default:
        setChatContent("Hi! How can I help you?");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log("Scroll event listener added");
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
      console.log("Scroll event listener removed");
    };
  }, []);
  
  const SectionCards = ({ title, cards }) => (
    <div className="section-cards">
      <h3>{title}</h3>
  
      {/* Container for the cards */}
      <div className="shared-cards-container">
        {cards.map((card, index) => (
          <div key={index} className="shared-card" onClick={() => openLightbox(projects[currentProjectIndex].id, card.category)}>
            <h4>{card.type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
  
  const [isRotated, setIsRotated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Index for project cards
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// Function to open the lightbox
const openLightbox = (projectId, category) => {
  // Find the selected project by ID
  const selectedProject = projects.find(project => project.id === projectId);
  if (!selectedProject) return;

  // Find the category in the details
  const categories = ["uiux", "frontend", "backend"];
  let images = [];

  // Search through categories and find images by matching type
  for (let cat of categories) {
    const content = selectedProject.details[cat].content.find(item => item.type === category);
    if (content) {
      images = content.images; // Get images from the matched category type
      break;
    }
  }

  // If images are found, set them in the lightbox
  if (images.length > 0) {
    setLightboxImages(images);
    setCurrentImageIndex(0); // Start with the first image
    setIsLightboxOpen(true); // Open the lightbox
  }
};

// Function to close the lightbox
const closeLightbox = () => {
  setIsLightboxOpen(false);
};

// Navigation functions for the lightbox
const prevImage = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1));
};

const nextImage = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1));
};
  // Function to handle key click
  const handleKeyClick = () => {
    setIsRotated(true);
    
    // After rotation is complete, make the door disappear
    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Delay matches the rotation duration
  };
 // Navigation handlers for project cards
 const handlePreviousProject = () => {
  setCurrentProjectIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : projects.length - 1
  );
};

const handleNextProject = () => {
  setCurrentProjectIndex((prevIndex) =>
    prevIndex < projects.length - 1 ? prevIndex + 1 : 0
  );
};

const [windowTitle, setWindowTitle] = useState('SKILLS'); // Manage popup title
const [isFolderOpen, setIsFolderOpen] = useState(false);  // Track if folder is open
const codeArsenalIcons = [
  { path: `${process.env.PUBLIC_URL}/CodeAicons/c++.svg`, title: 'C++' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/Css.svg`, title: 'CSS' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/html.svg`, title: 'HTML' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/Js.svg`, title: 'JavaScript' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/php.svg`, title: 'PHP' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/Pyhton.svg`, title: 'Python' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/Swift.svg`, title: 'Swift' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/firebase.svg`, title: 'Firebase' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/mysql.svg`, title: 'MySQL' },
  { path: `${process.env.PUBLIC_URL}/CodeAicons/postg.svg`, title: 'PostgreSQL' }
];

const UIDesignIcons = [
  { path: `${process.env.PUBLIC_URL}/uidesign/figma.svg`, title: 'Figma' },
  { path: `${process.env.PUBLIC_URL}/uidesign/canva.svg`, title: 'Canva' },
  { path: `${process.env.PUBLIC_URL}/uidesign/proto.svg`, title: 'Proto.io' },
  { path: `${process.env.PUBLIC_URL}/uidesign/creatie.svg`, title: 'Creatie AI' }
];
const MlLAB = [
  { path: `${process.env.PUBLIC_URL}/ML/datap.svg`, title: 'Data Pre-processing' },
  { path: `${process.env.PUBLIC_URL}/ML/modelT.svg`, title: 'Model Training' },
  { path: `${process.env.PUBLIC_URL}/ML/dataA.svg`, title: 'Data Analysis' }
  
];

const Frameworkicons = [
  { name: 'Numpy', color: '#013243', initial: 'N' },
  { name: 'Pandas', color: '#150458', initial: 'P' },
  { name: 'Matplotlib', color: '#11557c', initial: 'M' },
  { name: 'Seaborn', color: '#2c5d63', initial: 'S' },
  { name: 'Django', color: '#092E20', initial: 'D' },
  { name: 'React', color: '#61DBFB', initial: 'R' },
  { name: 'Node.js', color: '#68A063', initial: 'N' },
  { name: 'Express.js', color: '#000000', initial: 'E' },
  { name: 'Next.js', color: '#000000', initial: 'Nj' }

];
const creativeIcons = [
  { name: 'Filming & Video Editing', path: `${process.env.PUBLIC_URL}/creativev/Filming&Video Editing.svg` },
  { name: 'Marketing Strategy', path: `${process.env.PUBLIC_URL}/creativev/MarketingStrategy.svg` },
  { name: 'Photo Editing', path: `${process.env.PUBLIC_URL}/creativev/photoediting.svg` },
  { name: 'Project & Campaign Management', path: `${process.env.PUBLIC_URL}/creativev/k.svg` }
];

// Consolidate all icons into one array
const allIcons = [
  ...codeArsenalIcons,
  ...UIDesignIcons,
  ...MlLAB,
  ...creativeIcons,
];

const allFrameworkicons = [...Frameworkicons];
// Function to find matching icon
const findIconPath = (tool) => {
  // First check for SVG icons in the main array (for cases like Figma, Canva)
  const icon = allIcons.find(icon => icon.title === tool);
  if (icon) {
    return (
      <div className="tool-icon-wrapper">
        <img src={icon.path} alt={icon.title} className="tool-icon-item" />
        <p className="tool-icon-label">{icon.title}</p> {/* Display the title */}
      </div>
    );
  }

  // Check for icons in Frameworkicons using color and initials
  const dataIcon = Frameworkicons.find(icon => icon.name === tool);
  if (dataIcon) {
    return (
      <div className="tool-icon-wrapper">
        <div
          style={{
            backgroundColor: dataIcon.color,
            width: '35px', // Adjust size if needed
            height: '35px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            
          }}
        >
          {dataIcon.initial}
        </div>
        <p className="tool-icon-label">{dataIcon.name}</p> {/* Display the name */}
      </div>
    );
  }

  return null;
};

// Track the navigation history of folders
const [navigationHistory, setNavigationHistory] = useState([]); // Array of visited folder names
const [currentIndex, setCurrentIndex] = useState(-1); // Track the current position in the history

const handleFolderClick = (folderName) => {
  setWindowTitle(folderName);
  setIsFolderOpen(true);
  
  // Update navigation history
  const newHistory = [...navigationHistory.slice(0, currentIndex + 1), folderName];
  setNavigationHistory(newHistory);
  setCurrentIndex(newHistory.length - 1); // Update current index
};
const handleBackClick = () => {
  // If no folder is open, do nothing
  if (currentIndex <= 0) {
    setWindowTitle('SKILLS');
    setIsFolderOpen(false);
    setCurrentIndex(-1); // Reset to default view
    return;
  }
  
  // Go back one step in history
  const newIndex = currentIndex - 1;
  setWindowTitle(navigationHistory[newIndex]);
  setCurrentIndex(newIndex);

  // If the new index is -1, go back to "SKILLS" view
  if (newIndex === -1) {
    setWindowTitle('SKILLS');
    setIsFolderOpen(false);
  }
};

// Handle forward navigation
const handleForwardClick = () => {
  if (currentIndex < navigationHistory.length - 1) {
    const newIndex = currentIndex + 1;
    setWindowTitle(navigationHistory[newIndex]); // Update title to next folder
    setCurrentIndex(newIndex);
    setIsFolderOpen(true);
  }
};
const [isExpanded, setIsExpanded] = useState(false);

const handleExpandToggle = () => {
  setIsExpanded(!isExpanded);
};



  return (
    
    
    <div className="App">
      
      <div className="avatar-container">
  <img 
    src={`${process.env.PUBLIC_URL}/AIMEavatar.png`} 
    alt="AIME Avatar" 
    className="aime-avatar"
  />
  <div className="chat-bubble">
    <span>{chatContent}</span>
  </div>
</div>
      
      <section id="hero" className="section hero">
        <div className="words-container">
          <span className="innovation">INNOVATION</span>
          <span className="creativity">CREATIVITY</span>
          <span className="simplicity">SIMPLICITY</span>
        </div>

        {/* New content container */}
        <div className="content-container">
        <img
  src={`${process.env.PUBLIC_URL}/IMG_1212.jpg`}
  alt="Sofiane Belbrik"
  className="profile-photo"
/>

          {/* Text container */}
          <div className="text-container">
            {/* First paragraph of text */}
            <div className="intro-text">
              <p>
                Hi, I'm Sofiane Belbrik. Welcome to my portfolio—a space where I showcase
                not just my projects but who I am as a developer and creator. I believe that
                coding is an art, blending creative thinking and simplicity to build
                intuitive, user-friendly solutions. My approach is always focused on thinking
                outside the box to solve real-world problems.
              </p>
            </div>

            {/* Second paragraph of text */}
            <div className="second-intro-text">
            <p>
  Need a quick overview? That’s me down there, in the bottom of the screen. My avatar will be sharing brief messages about each section to guide you as you scroll through. Just follow along as the messages update with each section!
</p>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutmee" className="section1">
  <h1>About Me</h1>
  <div className="about-container">
 
  <p className="about-text">
    I’m a passionate developer driven by the challenge of creating solutions that truly fix problems and elevate user experiences.
    Whether it’s designing a visually engaging interface or developing AI-powered applications, I find motivation in building something from the ground up
    that users enjoy both functionally and aesthetically.
  </p>
  <p className="about-text">
  With a Bachelor’s in Computing Systems and a Master’s in AI, I’ve built a strong foundation in software development and a passion for creating innovative solutions. My experience includes an internship in web development with ShiftIn in Algeria, where I contrinuted in designing and implementing both front-end and back-end solutions for multiple brands, honing my skills in user-centered design and robust architecture. Currently, I’m expanding my expertise in the energy sector, working hands-on with control systems and technical support. Each of these experiences continues to shape and elevate the software developer I aspire to be. 
  </p>
  <p className="about-text">
    What excites me most is combining creativity and technology—taking a simple idea and transforming it into something elegant and user-friendly.
    I see development not just as coding, but as an art form, crafting intuitive, impactful solutions that make life easier.
  </p>
  </div>
  <img src={`${process.env.PUBLIC_URL}/aboutmepic.PNG`} alt="About Me" className="about-image" />

      </section>

<section id="skills" className="section2">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
  <img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud1" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud2" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud3" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud5" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud6" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud7" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud8" />
<img src={`${process.env.PUBLIC_URL}/cloudss.svg`} alt="Cloud" className="cloud cloud9" />


  <div class="popup-window">
    <div class="top-bar">
      <div class="circle"></div>
      <div class="circle"></div>
      <div className="bar-title">{windowTitle}</div>
      <div className="nav-buttons">
  <button className="nav-button" onClick={handleBackClick}>⬅</button>
  <button className="nav-button" onClick={handleForwardClick}>➡</button>
</div>
    </div>
   
    
    <div className="window-body">
  {!isFolderOpen ? (
    <>
    <div 
        className="folder code-arsenal"
        onClick={() => handleFolderClick('Code Arsenal')}
      >
       <img 
          src={`${process.env.PUBLIC_URL}/CodeArsenal.svg`} 
          alt="Code Arsenal" 
          className="folder-icon" 
        />
        <p className="folder-label">Code Arsenal</p>
      </div>

      <div 
        className="folder framework-forge"
        onClick={() => handleFolderClick('Framework Forge')}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/FrameworkForge.svg`} 
          alt="Framework Forge" 
          className="folder-icon" 
        />
        <p className="folder-label">Framework Forge</p>
      </div>

      <div 
        className="folder uiux-workshop"
        onClick={() => handleFolderClick('UI/UX Workshop')}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/uiux.svg`} 
          alt="UI/UX Workshop" 
          className="folder-icon" 
        />
        <p className="folder-label">UI/UX Workshop</p>
      </div>

      <div 
        className="folder data-science-lab"
        onClick={() => handleFolderClick('Data Science Lab')}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/DataScienceLab.svg`} 
          alt="Data Science Lab" 
          className="folder-icon" 
        />
        <p className="folder-label">Data Science Lab</p>
      </div>

      <div 
        className="folder creative-vault"
        onClick={() => handleFolderClick('Creative Vault')}
      >
       <img 
          src={`${process.env.PUBLIC_URL}/CreativeVault.svg`} 
          alt="Creative Vault" 
          className="folder-icon" 
        />
        <p className="folder-label">Creative Vault</p>
      </div>



    </>
  ) : 
  (



    
    // Render empty content when folder is open
    <div className="folder-content">
  {windowTitle === 'Code Arsenal' && (
  <div className="icons-grid">
    {codeArsenalIcons.map((icon, index) => (
      <div key={index} className="icon-square">
        <img 
          src={icon.path} 
          alt={`Code Arsenal Icon ${index + 1}`} 
          className="folder-icon-item" 
        />
        <p className="icon-label">{icon.title}</p>
      </div>
    ))}
  </div>
)}

  
  {/* Framework Lab Icons */}
  {windowTitle === 'Framework Forge' && (
    <div className="icons-grid1">
      {Frameworkicons.map((icon, index) => (
        <div key={index} className="icon-square">
          <div 
            className="icon-initial" 
            style={{ backgroundColor: icon.color }}
          >
            {icon.initial}
          </div>
          <p className="icon-label">{icon.name}</p>
        </div>
      ))}
    </div>
  )}

{windowTitle === 'Data Science Lab' && (
  <div className="icons-grid">
    {MlLAB.map((icon, index) => (
      <div key={index} className="icon-square">
        <img 
          src={icon.path} 
          alt={`ML Icon ${index + 1}`} 
          className="folder-icon-item" 
        />
        <p className="icon-label">{icon.title}</p>
      </div>
    ))}
  </div>
)}

<div className="folder-content">
  {/* Creative Vault Icons */}
  {windowTitle === 'Creative Vault' && (
    <div className="icons-grid1">
      {creativeIcons.map((icon, index) => (
        <div key={index} className="icon-container">
          <img 
            src={icon.path} 
            alt={icon.name} 
            className="folder-icon-item" 
          />
          <p className="icon-label">{icon.name}</p>
        </div>
      ))}
    </div>
  )}
</div>

  
  {windowTitle === 'UI/UX Workshop' && (
  <div className="icons-grid">
    {UIDesignIcons.map((icon, index) => (
      <div key={index} className="icon-square">
        <img 
          src={icon.path} 
          alt={`UI/UX Workshop Icon ${index + 1}`} 
          className="folder-icon-item" 
        />
        <p className="icon-label">{icon.title}</p>
      </div>
    ))}
  </div>
)}
</div>

    
  )}
</div>
  </div>
</section>

<section id="project-vault" className="section3">
  <h1 className="projects-title">Project Vault</h1>

  {/* Vault Container */}
  <div className={`vault-container ${isExpanded ? 'expanded' : ''}`}>
    {/* Vault Door */}
    {!isOpen && (
      <div className="vault-door">
        <img
          src={`${process.env.PUBLIC_URL}/vaultkey.svg`}
          alt="Vault Key"
          className={`vault-key ${isRotated ? 'rotate' : ''}`}
          onClick={handleKeyClick}
        />
      </div>
    )}

    {/* Project Cards */}
    {isOpen && (
      <div className="project-card-container">
        {/* Previous Arrow */}
        <button className="nav-button prev-button" onClick={handlePreviousProject}>
          ⬅
        </button>

        {/* Project Card */}
        <div key={projects[currentProjectIndex].id} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
          {/* Expand Button */}
          <button className="expand-button" onClick={handleExpandToggle}>
            {isExpanded ? '✕' : '⛶'}
          </button>

          {/* Card Title */}
          <h2 className="card-title">{projects[currentProjectIndex].title}</h2>
          {projects[currentProjectIndex].githubLink && (
  <a 
    href={projects[currentProjectIndex].githubLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="github-repo-button"
    style={{
      display: 'inline-block',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#24292e',
      borderRadius: '6px',
      textDecoration: 'none',
      border: '1px solid #24292e'
    }}
  >
    GitHub Repo
  </a>
)}
          {/* Description Section */}
          <div className="card-description-container">
            <h3 className="description-title">Description</h3>
            <div className="description-content">{projects[currentProjectIndex].description}</div>
          </div>

          {/* Tools Section */}
          <div className="tools-container">
            <h3 className="tools-icons">Tools used</h3>
            <div className="toolsIcons-content">
              {projects[currentProjectIndex].tools.map((tool, index) => (
                <div key={index} className="tool-icon-item">
                  {findIconPath(tool)}
                </div>
              ))}
            </div>
          </div>

          {/* Creation Path Section */}
          <div className="creation-path-container">
            <h3 className="creation-path-title">Current Scope</h3>
            <div className="progress-line-vertical">
              <div className="continuous-line"></div>

              <div className="progress-step">
                <span className="progress-label">UI/UX</span>
                <div className={`progress-bubble ${projects[currentProjectIndex].phases.uiux ? 'completed' : ''}`}></div>
              </div>

              <div className="progress-step">
                <span className="progress-label">Front-end</span>
                <div className={`progress-bubble ${projects[currentProjectIndex].phases.frontend ? 'completed' : ''}`}></div>
              </div>

              <div className="progress-step">
                <span className="progress-label">Back-end</span>
                <div className={`progress-bubble ${projects[currentProjectIndex].phases.backend ? 'completed' : ''}`}></div>
              </div>

              
            </div>
          </div>

  
          {isExpanded && (
  <div className="expanded-content">
    {/* UI/UX Section */}
    {projects[currentProjectIndex].phases.uiux && (
      <div className="detailedcards-container">
        <div className="section-cards">
          <h3>UI/UX</h3>
          {/* Container for the cards */}
          <div className="shared-cards-container">
            {/* Sketches Card */}
            <div 
              className="shared-card"
              onClick={() => openLightbox(projects[currentProjectIndex].id, 'Sketches')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/sketchestext.svg`}
                alt="Sketches"
                className="sketches-svg"
              />
            </div>
            {/* Mockups Card */}
            <div 
              className="shared-card mockups-card"
              onClick={() => openLightbox(projects[currentProjectIndex].id, 'Mockups')}
            >
              <h4>Mockups</h4>
            </div>
            {/* Final Prototype Card */}
            <div 
              className="shared-card"
              onClick={() => openLightbox(projects[currentProjectIndex].id, 'Final Prototype')}
            >
              <h4 className="final-text">Final </h4> 
              <h5 className="prototype-text">Prototype</h5>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Front-end Section */}
    {projects[currentProjectIndex].phases.frontend && (
      <div className="detailedcards-container">
        <SectionCards
          title="Front-end Development"
          cards={[
            { type: "Components", category: "Components" },
            { type: "Responsive Design", category: "Responsive Design" },
            { type: "Animations & Interactions", category: "Animations & Interactions" }
          ]}
        />
      </div>
    )}

    {/* Back-end Section */}
    {projects[currentProjectIndex].phases.backend && (
      <div className="detailedcards-container">
        <SectionCards
          title="Back-end Development"
          cards={[
            { type: "Server & Routing", category: "Server Setup" },
            { type: "Database Integration", category: "Database Integration" },
            { type: "Environment & Configurations", category: "Environment & Configurations" }
          ]}
        />
      </div>
    )}
    
    {/* Lightbox for viewing images */}
    {isLightboxOpen && (
      <div className="lightbox">
        <button className="close-button" onClick={closeLightbox}>✕</button>
        <button className="nav-button2 left" onClick={prevImage}>⬅</button>
        <div className="lightbox-content">
          <img src={lightboxImages[currentImageIndex]} alt="Lightbox" />
        </div>
        <button className="nav-button2 right" onClick={nextImage}>➡</button>
      </div>
    )}
  </div>
)}
        </div>

        {/* Next Arrow */}
        <button className="nav-button next-button" onClick={handleNextProject}>
          ➡
        </button>
      </div>
    )}
  </div>
</section>

<section id="contact" className="section4">
  <div class="contact-box">
    <h1>Contact Me</h1>
  </div>
  
  <div class="contact-info-container">
    <div class="linkedIn">
      <a href="https://www.linkedin.com/in/sofiane-belbrik/" target="_blank">LinkedIn</a>
    </div>
    <div class="Email">
      <a href="belbrik_sofiane@yahoo.com">Email</a>
    </div>
    <div class="Phone">
      <a href="tel:+44 7554673692">Phone</a>
    </div>
  </div>
</section>
    </div>    
  );
}

export default App;

