const jokeE1 = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

const generateJoke = async () => {
    const config = {
        headers: {Accept: "application/json"},
    };

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeE1.innerHTML = data.joke;
};

generateJoke();
jokeBtn.addEventListener("click", () => generateJoke());
