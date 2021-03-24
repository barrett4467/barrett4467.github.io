let projects = [
  {
    title: "Psychic-Game",
    description: "",
    image: "href='./assets/psychic-game.png'",
    example_link: "href='https://barrett4467.github.io/Psychic-Game/'",
    code_link: "href='https://github.com/barrett4467/Psychic-Game'"
  },
  {
    title: "Crystal-Collector",
    description: "",
    image: "href=./assets/crystal-collector.png",
    example_link: "href='https://barrett4467.github.io/Crystal-Collector/'",
    code_link: "href='https://github.com/barrett4467/Crystal-Collector/'"
  },
  {
    title: "Trivia-Game",
    description: "",
    image: "href=./assets/trivia-game.png",
    example_link: "href='https://barrett4467.github.io/Trivia-Game/'",
    code_link: "href='https://github.com/barrett4467/Trivia-Game/'"
  },
  {
    title: "Gif-Tastic",
    description: "",
    image: "href=./assets/gif-tastic.png",
    example_link: "href='https://barrett4467.github.io/Gif-Tastic/'",
    code_link: "href='https://github.com/barrett4467/Gif-Tastic/'"
  },
  {
    title: "Train-Tracker",
    description: "",
    image: "href=./assets/train-tracker.png",
    example_link: "href='https://barrett4467.github.io/Train-Tracker/'",
    code_link: "href='https://github.com/barrett4467/Train-Tracker'"
  }
];

function displayProjects() {
  projects.forEach((project) => {
    const targetDiv = document.querySelector("#projects");

    targetDiv.innerHTML += `
       <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src=${project.image} alt =${project.title} style="width:100%;height:100%;">
              </div>
            <div class="flip-card-back">
              <h1>${project.title}</h1>
               <a target="_blank" ${project.example_link} class="port-link">Link to active project</a>
               <a target="_blank" ${project.code_link} class="port-link">View the Code</a>
              </div> 
            </div>
          </div>
         </div>    
        `;
  });
}

displayProjects();
