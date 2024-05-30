function typePoem(response) {
    console.log("poem generated");

    new Typewriter(".pPoem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let topicInput = document.querySelector("#topic");
    let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4";
    let prompt =`Please generate a trip iterinary to ${topicInput.value}`;
    let context = "You are a vacation iterinary generator, please generate an itinerary of interesting places and places worth seeing day by day in basic HTML and separate each line. Please include a title.";
    let apiUrl =  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector(".pPoem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="loader"></div> Generating an itinerary for ${topicInput.value}...`;

    axios.get(apiUrl).then(typePoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);


