const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        github: "https://github.com/your-repo-1",
        liveDemo: "https://live-demo-link-1.com",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        github: "https://github.com/your-repo-2",
        liveDemo: "https://live-demo-link-2.com",
    },
];

const gallery = document.getElementById('project-gallery');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.github}">View on GitHub</a> |
        <a href="${project.liveDemo}">Live Demo</a>
    `;
    gallery.appendChild(projectDiv);
});
