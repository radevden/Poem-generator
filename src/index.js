function generatePoem(event){
    event.preventDefault ();
    poemText.innerHTML = "Generating a poem";

    alert("Generating a poem");
}

new Typewriter (".pPoem", {
    strings: "Type the poem here",
    autostart: true,
    delay: 50,
});

let formElement = document.querySelectorAll("#poem-form");
formElement.addEventListener ("submit", generatePoem);

