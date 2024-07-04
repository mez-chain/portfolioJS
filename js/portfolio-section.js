const dataProjects = [
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project1.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project2.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project3.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project4.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project5.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
    { name: 'Project name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', featuredImage: '/images/portfolio/project6.png', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkToLiveVersion: 'link1', linkToSource: 'link2'},
];

document.addEventListener("DOMContentLoaded", () => {
    const contentSection = document.getElementById('portfolio');

    dataProjects.forEach(project => {
        const divProject = document.createElement('div');
        divProject.className = 'project-card';
        const headDiv = document.createElement('div');
        headDiv.className = 'card-head';

        const imgCard = document.createElement('img');
        imgCard.src = project.featuredImage;
        imgCard.alt = project.name;
        imgCard.className = 'img-card';

        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'card-body';

        const title = document.createElement('h1');
        title.textContent = project.name;
        title.className = 'card-title';

        const techList = document.createElement('ul');
        techList.className = 'tech-list';
        project.technologies.forEach(listItem => {
            const li = document.createElement('li');
            li.textContent = listItem;
            techList.appendChild(li);
        });

        const projectLink = document.createElement('a');
        projectLink.textContent = 'See this project';
        projectLink.href = '#';
        projectLink.className = 'link';

        headDiv.appendChild(imgCard);
        divProject.appendChild(headDiv);
        bodyDiv.appendChild(title);
        bodyDiv.appendChild(techList);
        bodyDiv.appendChild(projectLink);
        divProject.appendChild(bodyDiv);
        contentSection.appendChild(divProject);
    });
});