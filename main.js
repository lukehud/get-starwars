let searchInput = document.getElementById('search');

document.getElementById('get-character').addEventListener
('click', function() {
fetchRandomCharacter();
});

document.getElementById('get-all-characters').addEventListener('click', function() {
fetchAllCharacters();
});

searchInput.addEventListener('keyup', function() {

});

function fetchRandomCharacter() {
    let randomID = Math.floor(Math.random() * 9) + 1;

    fetch(`https://swapi.dev/api/people/${randomID}/`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('character').innerHTML = 
        `<h2>${data.name}</h2>
        <p>Height: ${data.height}cm</p>
        <p>Mass: ${data.mass}kg</p>
        <p>Hair color: ${data.hair_color}</p>
        <p>Skin color: ${data.skin_color}</p>
        <p>Eye Color: ${data.eye_color}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>`;
    })
    .catch(error => console.log('Error: ', error));
}

function fetchAllCharacters() {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
        let characters = data.results;
        let charactersList = document.getElementById('characters');
        charactersList.innerHTML = '';
        characters.forEach(character => {
            let li = document.createElement('li');
            li.textContent = character.name;
            li.addEventListener('click', function() {
                document.getElementById('character').innerHTML = 
                `<h2>${character.name}</h2>
                <p>Height: ${character.height}cm</p>
                <p>Mass: ${character.mass}kg</p>
                <p>Hair color: ${character.hair_color}</p>
                <p>Skin color: ${character.skin_color}</p>
                <p>Eye Color: ${character.eye_color}</p>
                <p>Birth Year: ${character.birth_year}</p>
                <p>Gender: ${character.gender}</p>`;
            })
            charactersList.appendChild(li);
        });
    })
    .catch(error => console.log('Error: ', error));
}

// add asset pictures in the folder and find a way to have JS look for the character & add a baseball card style pic next to the character.
// download/add actual star wars font
// implement an additional button to fetch a different set of "all characters"
// implement functionality for search bar from Dylan's github