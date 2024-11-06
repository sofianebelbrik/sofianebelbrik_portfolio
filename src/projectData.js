export const projects = [
  {
    id: 1,
    title: "Personal website - 2024 ",
   
    description: "I designed a personal website to showcase my skills and the projects I’m working on, using HTML, CSS, React, and JavaScript for the front end. The site includes an “About Me” section where I introduce myself, and my skills are displayed within a pixelated window interface featuring clickable folders—each folder represents different skills of mine. For the projects section, I created a special “Vault Project” area where visitors click on a vault handle to open it; inside, there are cards with basic information about my projects, which expand to reveal more detailed descriptions. Finally, there’s a “Contact Me” page where visitors can get in touch with me.",
    tools: ["React", "CSS", "HTML","Figma", "Canva" ], 
    phases: {
      uiux: true,
      frontend: true,
      backend: false,
   
    },
    details: {
      uiux: {
        title: "UI/UX Design",
        content: [
          {
            type: "Sketches",
            images: [
              `${process.env.PUBLIC_URL}/sk1.jpg`,
              `${process.env.PUBLIC_URL}/sk2.jpg`,
              

            ],

            
          },
          {
            type: "Mockups",
            images: [
          
              `${process.env.PUBLIC_URL}/wf2.jpg`,
            ],
          },
          {
            type: "Final Prototype",
            images: [
              `${process.env.PUBLIC_URL}/Pt1.jpg`,
              `${process.env.PUBLIC_URL}/Pt2.jpg`,
              `${process.env.PUBLIC_URL}/Pt3.jpg`,
              `${process.env.PUBLIC_URL}/Pt4.jpg`,
              `${process.env.PUBLIC_URL}/Pt5.jpg`,
            ], 
          },
        ],
      },
      frontend: {
        title: "Front-end Development",
        content: [
          {
            type: "Components",
            images: [
              `${process.env.PUBLIC_URL}/frontend1.png`,
              `${process.env.PUBLIC_URL}/frontend2.png`,
              `${process.env.PUBLIC_URL}/frontend3.png`,
              `${process.env.PUBLIC_URL}/frontend4.jpg`,
              `${process.env.PUBLIC_URL}/frontend5.jpg`,
              `${process.env.PUBLIC_URL}/frontend6.jpg`,
              `${process.env.PUBLIC_URL}/frontend7.jpg`,
              `${process.env.PUBLIC_URL}/frontend8.jpg`,
              `${process.env.PUBLIC_URL}/frontend9.png`,
              `${process.env.PUBLIC_URL}/frontend10.png`,
              `${process.env.PUBLIC_URL}/frontend11.jpg`,

              


              


              
            ],
          },


          
          {
            type: "Responsive Design",
            images: [
              `${process.env.PUBLIC_URL}/s1.jpg`,
              `${process.env.PUBLIC_URL}/s2.jpg`,
              `${process.env.PUBLIC_URL}/s3.jpg`,
              
            ],
          },
          {
            type: "Animations & Interactions",
            images: [
              `${process.env.PUBLIC_URL}/g1.gif`,
              `${process.env.PUBLIC_URL}/g2.gif`,
         
            ],
          },
        ],
      },
      backend: {
        title: "Back-end Development",
        content: [
          {
            type: "Server & Routing",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/server1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/server2.png`,
            ],
          },
          {
            type: "Database Integration",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/database1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/database2.png`,
            ],
          },
          {
            type: "Environment & Configurations",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/env1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/env2.png`,
            ],
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "artist website - 2024",
    githubLink: "https://github.com/sofianebelbrik/artist-website",
    description: "I developed an interactive website for an artist that features a music promotion section, a store for merchandise, a video section showcasing the artist’s content, an announcements area, a subscription form, and social media links. It also includes a simple dashboard that allows the artist to easily control and update the displayed content. The front end is built using Next.js, React, Tailwind CSS, Swiper.js, and FontAwesome, while the back end utilizes Node.js, PostgreSQL, and AWS RDS. I used this project to explore a different tech stack from my previous work to expand my skills with modern technologies.",
    tools: ["HTML", "CSS", "Next.js","React","Figma", "Canva" ], 
    phases: {
      uiux: false,
      frontend: false,
      backend: false,

    },
    details: {
      uiux: {
        title: "UI/UX Design",
        content: [
          {
            type: "Sketches",
            images: [
              `${process.env.PUBLIC_URL}/project2/uiux/sketch1.png`,
              `${process.env.PUBLIC_URL}/project2/uiux/sketch2.png`,
            ],
          },
          {
            type: "Mockups",
            images: [
              `${process.env.PUBLIC_URL}/project2/uiux/mockup1.png`,
              `${process.env.PUBLIC_URL}/project2/uiux/mockup2.png`,
            ],
          },
          {
            type: "Final Prototype",
            images: [
              `${process.env.PUBLIC_URL}/project2/uiux/prototype.png`,
            ],
          },
        ],
      },
      frontend: {
        title: "Front-end Development",
        content: [
          {
            type: "Components",
            images: [
              `${process.env.PUBLIC_URL}/project2/frontend/component1.png`,
              `${process.env.PUBLIC_URL}/project2/frontend/component2.png`,
            ],
          },
          {
            type: "Responsive Design",
            images: [
              `${process.env.PUBLIC_URL}/project2/frontend/responsive1.png`,
              `${process.env.PUBLIC_URL}/project2/frontend/responsive2.png`,
            ],
          },
          {
            type: "Animations & Interactions",
            images: [
              `${process.env.PUBLIC_URL}/project2/frontend/animation1.gif`,
              `${process.env.PUBLIC_URL}/project2/frontend/interaction1.gif`,
            ],
          },
        ],
      },
      backend: {
        title: "Back-end Development",
        content: [
          {
            type: "Server & Routing",
            images: [
              `${process.env.PUBLIC_URL}/project2/backend/server1.png`,
              `${process.env.PUBLIC_URL}/project2/backend/server2.png`,
            ],
          },
          {
            type: "Database Integration",
            images: [
              `${process.env.PUBLIC_URL}/project2/backend/database1.png`,
              `${process.env.PUBLIC_URL}/project2/backend/database2.png`,
            ],
          },
          {
            type: "Environment & Configurations",
            images: [
              `${process.env.PUBLIC_URL}/project2/backend/env1.png`,
              `${process.env.PUBLIC_URL}/project2/backend/env2.png`,
            ],
          },
        ],
      },
    },
  },
  // Add more projects as needed

  {
    id: 3,
    title: "Comhub - 2024 ",
    githubLink: "https://github.com/blbsoo/ComHub",
    description: "I created Comhub, a platform designed to bring the comedy community together. Comhub helps comedians find gigs, connect with each other, and lets organizers discover talent. It’s also a place for audiences to explore comedy events. Inspired by the idea of a “comedian-organizer matching app,” I wanted to build something more user-friendly than existing platforms like GigGag or OpenComedy. Comhub includes features like easy profile building and community spaces, making it a better tool for comedians to showcase their work. This is a personal project, developed as a way to showcase my skills in UI/UX design and front-end development. The landing page design is ready, and I’m working on the back-end to add more features.",
    
    tools: [ "CSS", "HTML","Figma", "Canva" ], 
    phases: {
      uiux: true,
      frontend: true,
      backend: false,
   
    },
    details: {
      uiux: {
        title: "UI/UX Design",
        content: [
          {
            type: "Sketches",
            images: [
              `${process.env.PUBLIC_URL}/sketch1.jpg`,
              `${process.env.PUBLIC_URL}/sketch2.jpg`,
              `${process.env.PUBLIC_URL}/sketch3.jpg`,
              `${process.env.PUBLIC_URL}/sketch4.jpg`,
              `${process.env.PUBLIC_URL}/sketch5.jpg`,
              

            ],

            
          },
          {
            type: "Mockups",
            images: [
          
              `${process.env.PUBLIC_URL}/MU1.jpg`,
              `${process.env.PUBLIC_URL}/MU2.jpg`,
              `${process.env.PUBLIC_URL}/MU3.jpg`,
              `${process.env.PUBLIC_URL}/MU4.jpg`,
              `${process.env.PUBLIC_URL}/MU5.jpg`,

            ],
          },
          {
            type: "Final Prototype",
            images: [
              `${process.env.PUBLIC_URL}/comhub1.jpg`,
              `${process.env.PUBLIC_URL}/comhub2.jpg`,
              `${process.env.PUBLIC_URL}/comhub3.jpg`,
              `${process.env.PUBLIC_URL}/comhub4.jpg`,
              `${process.env.PUBLIC_URL}/comhub5.jpg`,
              `${process.env.PUBLIC_URL}/ui1.jpg`,
              `${process.env.PUBLIC_URL}/ui2.jpg`,
              `${process.env.PUBLIC_URL}/ui3.jpg`,
              `${process.env.PUBLIC_URL}/ui4.jpg`,
              `${process.env.PUBLIC_URL}/ui6.jpg`,
              `${process.env.PUBLIC_URL}/ui7.jpg`,
              `${process.env.PUBLIC_URL}/ui8.jpg`,
              `${process.env.PUBLIC_URL}/ui9.jpg`,
              `${process.env.PUBLIC_URL}/ui10.jpg`,
              `${process.env.PUBLIC_URL}/ui11.jpg`,
              `${process.env.PUBLIC_URL}/ui12.jpg`,
              `${process.env.PUBLIC_URL}/ui13.jpg`,
              `${process.env.PUBLIC_URL}/ui14.jpg`,
              `${process.env.PUBLIC_URL}/ui15.jpg`,
              `${process.env.PUBLIC_URL}/ui16.jpg`,
              `${process.env.PUBLIC_URL}/ui17.jpg`,
            




              
            ],
          },
        ],
      },
      frontend: {
        title: "Front-end Development",
        content: [
          {
            type: "Components",
            images: [
              `${process.env.PUBLIC_URL}/frn1.jpg`,
              `${process.env.PUBLIC_URL}/frn2.jpg`,
              `${process.env.PUBLIC_URL}/frn3.jpg`,
              `${process.env.PUBLIC_URL}/frn4.jpg`,
              `${process.env.PUBLIC_URL}/frn5.jpg`,
              `${process.env.PUBLIC_URL}/frn6.jpg`,

              
            ],
          },


          
          {
            type: "Responsive Design",
            images: [
              `${process.env.PUBLIC_URL}/res1.jpg`,
              `${process.env.PUBLIC_URL}/res2.jpg`,
              `${process.env.PUBLIC_URL}/res3.jpg`,
              `${process.env.PUBLIC_URL}/res5.jpg`,
           
              
            ],
          },
          {
            type: "Animations & Interactions",
            images: [
            
         
            ],
          },
        ],
      },
      backend: {
        title: "Back-end Development",
        content: [
          {
            type: "Server & Routing",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/server1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/server2.png`,
            ],
          },
          {
            type: "Database Integration",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/database1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/database2.png`,
            ],
          },
          {
            type: "Environment & Configurations",
            images: [
              `${process.env.PUBLIC_URL}/project1/backend/env1.png`,
              `${process.env.PUBLIC_URL}/project1/backend/env2.png`,
            ],
          },
        ],
      },
    },
  },
];
