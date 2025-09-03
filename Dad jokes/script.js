const jokeElement = document.getElementById("joke")
const jokeButton = document.getElementById("jokeBtn")

generateJoke()

jokeButton.addEventListener("click", generateJoke)

async function generateJoke() {
  const apiConfig = {
    headers: {
      Accept: "application/json",
    },
  }

  showLoadingState()

  try {
    const response = await fetch("https://icanhazdadjoke.com", apiConfig)
    const jokeData = await response.json()

    displayJoke(jokeData.joke)
  } catch (error) {
    showErrorMessage()
  }
}

function showLoadingState() {
  jokeElement.classList.add("loading")
  jokeElement.innerHTML = getRandomLoadingMessage()
}

function displayJoke(joke) {
  jokeElement.classList.remove("loading")
  jokeElement.classList.add("fade-in")

  jokeElement.innerHTML = joke

  setTimeout(() => {
    jokeElement.classList.remove("fade-in")
  }, 800)
}

function showErrorMessage() {
  jokeElement.classList.remove("loading")
  jokeElement.innerHTML =
    "Üzgünüm, şaka servisi şu anda çalışmıyor. Lütfen daha sonra tekrar deneyin."
}

function getRandomLoadingMessage() {
  const loadingMessages = [
    "Şaka hazırlanıyor...",
    "Baba şakası geliyor...",
    "Gülmeye hazır ol!",
    "Şaka yükleniyor...",
    "Haha moment yaklaşıyor...",
    "Şaka pişiyor...",
    "Gülme krizi geliyor...",
    "Şaka toplanıyor...",
    "Komiklik geliyor...",
    "Gülme zamanı!",
  ]

  const randomIndex = Math.floor(Math.random() * loadingMessages.length)
  return loadingMessages[randomIndex]
}

/*
function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }


    fetch('https://icanhazdadjoke.com', config)
        .then(response => response.json())
        .then(data => {
            jokeEl.innerHTML = data.joke;
        });
}
*/
