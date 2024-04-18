function typePoem(response) {
    console.log(response); // Log the entire response object
    console.log(response.data); // Log the data property of the response object
    new Typewriter(".pPoem", {
        strings: response.data.answer,
        autostart: true,
        delay: 50,
    });
}

function generatePoem(event) {
    event.preventDefault();

    let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4";
    let prompt = "Please generate a poem for the chosen topic";
    let context = "You are a poem generator, please generate a short 2 verse poem.";
    let apiUrl =  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(typePoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);