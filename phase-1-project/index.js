document.addEventListener("DOMContentLoaded", () =>{
    function fetchMovies() {
        fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
})

fetchMovies()








// fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));