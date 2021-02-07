//Question 2

url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gameContainer = document.querySelector(".games");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const gameData = await response.json();

    const gameInfo = gameData.results;

    gameContainer.innerHTML = "";

    for (let i = 0; i < gameInfo.length; i++) {
      if (i === 8) {
        break;
      }

      const gameTitle = gameInfo[i].name;
      const gameRating = gameInfo[i].rating.toFixed(2);
      const gameTags = gameInfo[i].tags;

      gameContainer.innerHTML += `
        <div class="container">
        <h2>${gameTitle}</h2>
        <p>Rating: ${gameRating}</p>
        <p>Number of tags: ${gameTags.length}</p>
        </div>`;
    }
  } catch (error) {
    gameContainer.innerHTML = errorMessage("Connection to API failed...");
  }
}

makeApiCall();
