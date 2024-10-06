export const projects = [
  {
    id: 1,
    title: "Project One",
    description: "////.",
    tools: ["C++", "React", "Firebase"], 
    phases: {
      uiux: true,
      frontend: true,
      backend: true,
   
    },
    details: {
      uiux: {
        title: "UI/UX Design",
        content: [
          {
            type: "Sketches",
            images: [
              `${process.env.PUBLIC_URL}/project1/uiux/sketch1.png`,
              `${process.env.PUBLIC_URL}/project1/uiux/sketch2.png`,
            ],
          },
          {
            type: "Mockups",
            images: [
              `${process.env.PUBLIC_URL}/project1/uiux/mockup1.png`,
              `${process.env.PUBLIC_URL}/project1/uiux/mockup2.png`,
            ],
          },
          {
            type: "Final Prototype",
            images: [
              `${process.env.PUBLIC_URL}/project1/uiux/prototype.png`,
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
              `${process.env.PUBLIC_URL}/project1/frontend/component1.png`,
              `${process.env.PUBLIC_URL}/project1/frontend/component2.png`,
            ],
          },
          {
            type: "Responsive Design",
            images: [
              `${process.env.PUBLIC_URL}/project1/frontend/responsive1.png`,
              `${process.env.PUBLIC_URL}/project1/frontend/responsive2.png`,
            ],
          },
          {
            type: "Animations & Interactions",
            images: [
              `${process.env.PUBLIC_URL}/project1/frontend/animation1.gif`,
              `${process.env.PUBLIC_URL}/project1/frontend/interaction1.gif`,
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
    title: "Project Two",
    description: "This is a detailed description of Project Two, focusing on different aspects.",
    tools: ["HTML", "CSS", "JavaScript"],
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
];