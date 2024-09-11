

document.getElementById('getJokeBtn').addEventListener('click', function() {
  const jokeDisplay = document.getElementById('jokeDisplay');

  // Fetch a random Chuck Norris joke
  fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
          jokeDisplay.innerHTML = data.value;
      })
      .catch(error => {
          console.error('Error fetching the joke:', error);
          jokeDisplay.innerHTML = 'Failed to load a joke. Please try again later.';
      });
});


document.getElementById('getJokeBtn').addEventListener('click', function() {
  const jokeDisplay = document.getElementById('jokeDisplay');

  // Fetch a random Chuck Norris joke
  fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
          jokeDisplay.innerHTML = data.value;
      })
      .catch(error => {
          console.error('Error fetching the joke:', error);
          jokeDisplay.innerHTML = 'Failed to load a joke. Please try again later.';
      });
});

alert("Bem vindo ao site de piadas do Chuck Norris!");


// document.getElementById("chuck").addEventListener('mouseover', ()=>{
//     alert("tremeu")
// })