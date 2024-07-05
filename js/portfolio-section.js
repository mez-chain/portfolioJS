document.addEventListener("DOMContentLoaded", () => {
    const contentSection = document.getElementById("portfolio");
    const container = document.createElement("div");
    container.className = "container";
  
    const portfolioHeader = document.createElement("h1");
    portfolioHeader.textContent = "Projects";
    portfolioHeader.className = "header";
  
    container.appendChild(portfolioHeader);
  
    dataProjects.forEach((project) => {
      const divProject = document.createElement("div");
      divProject.className = "project-card";
      const headDiv = document.createElement("div");
      headDiv.className = "card-head";
  
      const imgCard = document.createElement("img");
      imgCard.src = project.featuredImage;
      imgCard.alt = project.name;
      imgCard.className = "img-card";
  
      const bodyDiv = document.createElement("div");
      bodyDiv.className = "card-body";
  
      const title = document.createElement("h1");
      title.textContent = project.name;
      title.className = "card-title";
  
      const techList = document.createElement("ul");
      techList.className = "tech-list";
      project.technologies.forEach((listItem) => {
        const li = document.createElement("li");
        li.textContent = listItem;
        li.className = "list-item";
        techList.appendChild(li);
      });
  
      const projectLink = document.createElement("a");
      projectLink.textContent = "See this project";
      projectLink.href = "#";
      projectLink.className = "link";
      projectLink.id = project.id;
  
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-arrow-right";
      projectLink.appendChild(icon);
  
      projectLink.addEventListener("click", (event) => {
        event.preventDefault();
        openPopup(project.id);
      });
  
      headDiv.appendChild(imgCard);
      divProject.appendChild(headDiv);
      bodyDiv.appendChild(title);
      bodyDiv.appendChild(techList);
      bodyDiv.appendChild(projectLink);
      divProject.appendChild(bodyDiv);
      container.appendChild(divProject);
    });
  
    contentSection.appendChild(container);
  });
  
  