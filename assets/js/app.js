
let projects = [
    {
        title: "Psychic-Game",
        description: "",
        example_link: "href='https://barrett4467.github.io/Psychic-Game/'",
        code_link:"href='https://github.com/barrett4467/Psychic-Game'"
    },
    {
        title: "Crystal-Collector",
        description: "",
        example_link: "href='https://barrett4467.github.io/Crystal-Collector/'",
        code_link:""
    },
    {
        title: "Trivia-Game",
        description: "",
        example_link: "href='https://barrett4467.github.io/Trivia-Game/'",
        code_link:""
    },
    {
        title: "Gif-Tastic",
        description: "",
        example_link: "href='https://barrett4467.github.io/Gif-Tastic/'",
        code_link:""
    },
    {
        title: "Train-Tracker",
        description: "",
        example_link: "href='https://barrett4467.github.io/Train-Tracker/'",
        code_link:""
    }
];

function displayProjects () {
    projects.forEach(project => {
        const targetDiv = document.querySelector("#projects");
        
        targetDiv.innerHTML += `
            <div class="port-element" 
            style="background: url(./assets/images/${project.title}.png); background-size: cover; background-repeat: no-repeat; background-position:center;">
                <div class="port-hover">
                    <p>${project.description}</p>
                    <a target="_blank" ${project.example_link}> ${project.title}</a>
                    <a target="_blank" ${project.code_link}>View the Code</a>
                </div> 
            </div>
        `
    });
};

displayProjects();
