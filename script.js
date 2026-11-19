//Task 1: Dark / Light Mode

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

});

// Task 2: Show More / Show Less

const aboutButton = document.getElementById("about-toggle");
const moreAbout = document.getElementById("more-about");

aboutButton.addEventListener("click", function () {

    moreAbout.classList.toggle("hidden");

    if (moreAbout.classList.contains("hidden")) {
        aboutButton.textContent = "Show More";
    } else {
        aboutButton.textContent = "Show Less";
    }

});

// Task 3: Dynamic Project Cards

const projects = [
    {
        title: "AI Career Advisor / بوصلة",
        description: "AI-powered career guidance platform designed to help users explore suitable university majors and career paths.",
        category: "Programming",
    },
    {
        title: "CodeWay",
        description: "High-Fidelity prototype for Programming courses website.",
        category: "Web",
    },
    {
        title: "Samia Salon Reservation system",
        description: "A reservation system developed using Java for a Hair salon.",
        category: "Programming",
    }
];

function displayProjects(projectList) {

    const projectsContainer = document.getElementById("projects-container");

    // Clear existing cards to prevent duplicates
    projectsContainer.innerHTML = "";

    projectList.forEach(function (project) {

        // Create the card
        const card = document.createElement("article");
        card.classList.add("project-card");

        // Create the project title
        const title = document.createElement("h3");
        title.textContent = project.title;

        // Create the description
        const description = document.createElement("p");
        description.textContent = project.description;

        // Create the category
        const category = document.createElement("p");
        category.textContent = "Category: " + project.category;


        // Add elements to the card
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);

        // Add card to the projects container
        projectsContainer.appendChild(card);

    });
}
displayProjects(projects);

// Task 4: Project Filtering

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.category;

        if (category === "All") {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(function (project) {
                return project.category === category;
            });

            displayProjects(filteredProjects);
        }
    });

});

// Task 5: Print / Save as PDF

const printButton = document.getElementById("print-button");

printButton.addEventListener("click", function () {
    window.print();
});