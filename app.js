let characters = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru W. Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "rodia"
  },
  {
    "id": 16,
    "name": "Jabba D. Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    "homeworld": "unknown"
  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
]

const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
const characterContainer = document.querySelector('.row');


function getAllCharacter(){
    characters.forEach(function (item){
    const characterName = item.name;
    const characterHomeWorld = item.homeworld[0].toUpperCase() + item.homeworld.slice(1);;
    const characterPic = item.pic;
    console.log(characterName)
    const characterEl = document.createElement('div');
    characterEl.classList.add('col-sm-6');
    characterEl.classList.add('col-md-4');
    characterEl.classList.add('col-lg-3');
    characterEl.classList.add('character-column');
    characterEl.innerHTML += `
        <div>
            <div class="card">
                <img src="${characterPic}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Name: ${characterName}</p> 
                    <p class="card-text">Home World: ${characterHomeWorld}</p>
                </div>
            </div>
        </div>  
    `;
    
    characterContainer.appendChild(characterEl);    
  });
}
function removeCharacters(){
  characterContainer.innerHTML = "";
}


const greenButton = document.getElementById('greenBtn').style;
const redButton = document.getElementById('redBtn').style;
function changeButton(){
  greenButton.display = 'none';
  redButton.display = 'block';
}
function changeButtonRed(){
  redButton.display = 'none';
  greenButton.display = 'block';
}

// FILTERS

const filterBtn = document.getElementById('filterBtn');
const dropdownContent = document.querySelector('.dropdown-content');
function filterBtnActive(){
  filterBtn.classList.toggle('active');
  dropdownContent.classList.toggle('show-dropdown');
}

function getFiltered(getHomeworld) {
  const filteredCharacters = characters.filter(character => character.homeworld === getHomeworld)
  filteredCharacters.forEach(function (item){
    const characterName = item.name;
    const characterHomeWorld = item.homeworld[0].toUpperCase() + item.homeworld.slice(1);;
    const characterPic = item.pic;
    console.log(characterName)
    const characterEl = document.createElement('div');
    characterEl.classList.add('col-sm-6');
    characterEl.classList.add('col-md-4');
    characterEl.classList.add('col-lg-3');
    characterEl.classList.add('character-column');
    characterEl.innerHTML += `
        <div>
            <div class="card">
                <img src="${characterPic}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Name: ${characterName}</p> 
                    <p class="card-text">Home World: ${characterHomeWorld}</p>
                </div>
            </div>
        </div>  
    `;
    
    characterContainer.appendChild(characterEl);    
  });
}
/*const homeWorldsRaw = [];
for (let i = 0; i < characters.length; i++) {
  homeWorldsRaw.push(characters[i].homeworld);
}

const homeWorldUnique = [];
for (let j = 0; j < homeWorldsRaw.length; j++) {
  if(homeWorldUnique.includes(homeWorldsRaw[j])===false){
    homeWorldUnique.push(homeWorldsRaw[j]);
  }
  console.log(homeWorldUnique);
}
*/