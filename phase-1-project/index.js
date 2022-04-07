document.addEventListener("DOMContentLoaded", () =>{
    const movieCollection = document.getElementById('movie-collection') 
    function renderMovie(movie) {
        const movieInfo = 
          `<div class="card">
            <h2>${movie.name}</h2>
            <p>Rotten Tomatoes Score: ${movie.rottenTomatoesScore}</p>
            <p>Box Office Revenue: ${movie.boxOfficeRevenueInMillions} million</p>
            <textarea rows="4" cols="50" name="comment" form="usrform">What did you think?</textarea>
            <input type="submit" value="Submit">
            <p></p>
            <button class="like-btn" id="${movie.id}">Like ❤️</button>
          </div>`
        
          movieCollection.innerHTML += movieInfo
      }

    function fetchMovie() {
        fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
        .then(response => response.json())
        .then(result => {
            console.log(result)
         return   result.docs.forEach(renderMovie)
        })
        .catch(error => console.log('error', error));
    }
    fetchMovie()
     
})










// fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));