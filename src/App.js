import React, { useState } from 'react';
import './App.css';


function App() {
const [windowTitle, setWindowTitle] = useState('SKILLS'); // Manage popup title
const [isFolderOpen, setIsFolderOpen] = useState(false);  // Track if folder is open
const codeArsenalIcons = [
  { path: '/CodeAicons/c++.svg', title: 'C++' },
  { path: '/CodeAicons/Css.svg', title: 'CSS' },
  { path: '/CodeAicons/html.svg', title: 'HTML' },
  { path: '/CodeAicons/Js.svg', title: 'JavaScript' },
  { path: '/CodeAicons/php.svg', title: 'PHP' },
  { path: '/CodeAicons/Pyhton.svg', title: 'Python' },
  { path: '/CodeAicons/Swift.svg', title: 'Swift' },
  { path: '/CodeAicons/firebase.svg', title: 'Firebase' },
  { path: '/CodeAicons/mysql.svg', title: 'MySQL' },
  { path: '/CodeAicons/postg.svg', title: 'PostgreSQL' }
];

const UIDesignIcons = [
  { path: '/uidesign/figma.svg', title: 'Figma' },
  { path: '/uidesign/canva.svg', title: 'Canva' },
  { path: '/uidesign/proto.svg', title: 'Proto.io' },
  { path: '/uidesign/creatie.svg', title: 'Creatie AI' }
];
const MlLAB = [
  { path: '/ML/datap.svg', title: 'Data Pre-processing' },
  { path: '/ML/modelT.svg', title: 'Model Training' },
  { path: '/ML/dataA.svg', title: 'Data Analysis' }
];

const dataScienceIcons = [
  { name: 'Numpy', color: '#013243', initial: 'N' },
  { name: 'Pandas', color: '#150458', initial: 'P' },
  { name: 'Matplotlib', color: '#11557c', initial: 'M' },
  { name: 'Seaborn', color: '#2c5d63', initial: 'S' },
  { name: 'Django', color: '#092E20', initial: 'D' },
  { name: 'React', color: '#61DBFB', initial: 'R' },
  { name: 'Node.js', color: '#68A063', initial: 'N' },
  { name: 'Express.js', color: '#000000', initial: 'E' }
];
const creativeIcons = [
  { name: 'Filming & Video Editing', path: '/creativev/Filming&Video Editing.svg' },
  { name: 'Marketing Strategy', path: '/creativev/MarketingStrategy.svg' },
  { name: 'Photo Editing', path: '/creativev/photoediting.svg' },
  { name: 'Project & Campaign Management', path: '/creativev/k.svg' }
];
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


  return (
    
    <div className="App">
      
      
      <section id="hero" className="section hero">
        <div className="words-container">
          <span className="innovation">INNOVATION</span>
          <span className="creativity">CREATIVITY</span>
          <span className="simplicity">SIMPLICITY</span>
        </div>

        {/* New content container */}
        <div className="content-container">
        <img
  src="IMG_1212.jpg" // Remove the leading slash
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
                And if you’re in a hurry or need some quick info, meet
                <span className="aime"> A.I.M.E</span>, my latest project. He's right down
                there (in the bottom-right corner), ready to assist you with any questions
                and guide you through the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section1">
  <h1>About Me</h1>
  <div className="about-container">
 
  <p className="about-text">
    I’m a passionate developer driven by the challenge of creating solutions that truly fix problems and elevate user experiences.
    Whether it’s designing a visually engaging interface or developing AI-powered applications, I find motivation in building something from the ground up
    that users enjoy both functionally and aesthetically.
  </p>
  <p className="about-text">
    With a Bachelor’s in Computing Systems and a Master’s in AI, I’ve gained a deep understanding of how to integrate web development,
    app development, and AI to solve real-world issues. My educational journey in London opened my eyes to the endless possibilities of
    software development, while my AI work has pushed me to new levels, constantly finding ways to merge these two fields to create groundbreaking solutions.
  </p>
  <p className="about-text">
    What excites me most is the fusion of creativity and technology—taking a simple idea and transforming it into something elegant and user-friendly.
    I see development not just as coding, but as an art form, crafting intuitive, impactful solutions that make life easier.
  </p>
  </div>
  <img src="aboutmepic.PNG" alt="About Me" className="about-image" />

</section>

<section id="skills" className="section2">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud1" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud2" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud3" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud5" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud6" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud7" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud8" />
  <img src="/cloudss.svg" alt="Cloud" className="cloud cloud9" />


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
  <img src="/CodeArsenal.svg" alt="Code Arsenal" className="folder-icon" />
  <p className="folder-label">Code Arsenal</p>
</div>


<div 
  className="folder framework-forge"
  onClick={() => handleFolderClick('Framework Forge')}
>
  <img src="/FrameworkForge.svg" alt="Framework Forge" className="folder-icon" />
  <p className="folder-label">Framework Forge</p>
</div>


<div 
  className="folder uiux-workshop"
  onClick={() => handleFolderClick('UI/UX Workshop')}
>
  <img src="/uiux.svg" alt="UI/UX Workshop" className="folder-icon" />
  <p className="folder-label">UI/UX Workshop</p>
</div>


<div 
  className="folder data-science-lab"
  onClick={() => handleFolderClick('Data Science Lab')}
>
  <img src="/DataScienceLab.svg" alt="Data Science Lab" className="folder-icon" />
  <p className="folder-label">Data Science Lab</p>
</div>


<div 
  className="folder creative-vault"
  onClick={() => handleFolderClick('Creative Vault')}
>
  <img src="/CreativeVault.svg" alt="Creative Vault" className="folder-icon" />
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
      {dataScienceIcons.map((icon, index) => (
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

      <section id="projects" className="section3">
        <h1>Projects Section</h1>
      </section>

      <section id="contact" className="section4">
        <h1>Contact Me Section</h1>
      </section>
    </div>
  );
}

export default App;

