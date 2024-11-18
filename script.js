window.addEventListener("load", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("fade-in");
        }, index * 300);
    });
});

console.log("Welcome to Vishal Kumar's portfolio page!");
