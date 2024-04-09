function generatePoem(event) {
    event.preventDefault();
    
    alert("Generating a poem");

    new Typewriter (".pPoem", {
        strings: "Type the poem here",
        autostart: true,
        delay: 50,
    });
}

let form = document.querySelectorAll("#form");
form.addEventListener("submit", generatePoem);




