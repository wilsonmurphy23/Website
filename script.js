/* JavaScript */
// show home section by default
document.querySelector("#home").style.display = "block";
const resumeBtn = document.querySelector("#resume-btn");
const projectsBtn = document.querySelector("#projects-btn");
const aboutBtn = document.querySelector("#home-btn");
const sections = document.querySelectorAll("section");

resumeBtn.addEventListener("click", function() {
    hideSections();
    document.querySelector("#resume").style.display = "block";
});

projectsBtn.addEventListener("click", function() {
    hideSections();
    document.querySelector("#projects").style.display = "block";
});

aboutBtn.addEventListener("click", function() {
    hideSections();
    document.querySelector("#home").style.display = "block";
});

function hideSections() {
    sections.forEach(function(section) {
        section.style.display = "none";
    });
}
