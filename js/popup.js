const dataProjects = [
    {
      id: "link1",
      name: "Project name goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      featuredImage: "/images/portfolio/project1.png",
      technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
      linkToLiveVersion: "link1",
      linkToSource: "link2",
    },
    {
      id: "link2",
      name: "Project name goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      featuredImage: "/images/portfolio/project2.png",
      technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
      linkToLiveVersion: "link1",
      linkToSource: "link2",
    },
    {
      id: "link3",
      name: "Project name goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      featuredImage: "/images/portfolio/project6.png",
      technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
      linkToLiveVersion: "link1",
      linkToSource: "link2",
    },
    {
      id: "link4",
      name: "Project name goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      featuredImage: "/images/portfolio/project4.png",
      technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
      linkToLiveVersion: "link1",
      linkToSource: "link2",
    },
    {
      id: "link5",
      name: "Project name goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      featuredImage: "/images/portfolio/project5.png",
      technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
      linkToLiveVersion: "link1",
      linkToSource: "link2",
    },
  ];
  
  function openPopup(projectId) {
    const project = dataProjects.find(proj => proj.id === projectId);
    
    if (project) {
      document.getElementById("popupTitle").textContent = project.name;
      document.getElementById("popupImage").src = project.featuredImage;
      document.getElementById("popupImage").alt = project.name;
      document.getElementById("popupDescription").textContent = project.description;
  
      const techList = document.getElementById("popupTechnologies");
      techList.innerHTML = "";
      project.technologies.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        li.className = "list-item";
        techList.appendChild(li);
      });
  
      document.getElementById("liveVersionLink").href = project.linkToLiveVersion;
      document.getElementById("sourceLink").href = project.linkToSource;
  
      const popup = document.getElementById("popup");
      popup.classList.remove("hidden");
  
      document.getElementById("closePopup").addEventListener("click", () => {
        popup.classList.add("hidden");
      });
    }
  }