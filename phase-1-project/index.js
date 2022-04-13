document.addEventListener("DOMContentLoaded", () => {

    function renderMovie(movie) {
        let movieInfo = 
          `<div class="card">
            <h2>${movie.name}</h2>
            <p><b>Rotten Tomatoes Score:</b> ${movie.rottenTomatoesScore}</p>
            <p><b>Box Office Revenue:</b> ${movie.boxOfficeRevenueInMillions} million</p>
            
            <h3>comments:</h3>
                <ul id="${movie._id}">

                </ul>
            <form id="comment-form">
                <input type="text" id="comment-box" placeholder="Enter comment">
                <button class="comment-btn" id="${movie._id}">COMMENT</button>
            </form>
          </div>`
        
          movieCollection.innerHTML += movieInfo
    }

    function fetchMovie() {
        fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
        .then(response => response.json())
        .then(data => movies = data) // assigning the fetch to a variable
        .then(result => {
            console.log("all movies:", movies) //this is to see the movie collection in the console
            window.movies = result.docs
            result.docs.forEach(renderMovie)
            setupEventHandlers()
            

            function showShortMovies() {
                const shortMoviesBtn = document.getElementById("short-movies-btn")
                const shortMovieArr = movies.filter((movie) => movie.runtimeInMinutes < 200)
                shortMoviesBtn.addEventListener('click', function() {
                    console.log("now return to the DOM")
                    movieCollection.innerHTML = ""
                    shortMovieArr.forEach(renderMovie)
                })
            }
            showShortMovies();

            function showLongMovies() {
                const longMoviesBtn = document.getElementById('long-movies-btn')
                const longMovieArr = movies.filter((movie) => movie.runtimeInMinutes > 200)
                longMoviesBtn.addEventListener('click', function() {
                    movieCollection.innerHTML = ""
                    longMovieArr.forEach(renderMovie)
                })
            }
            showLongMovies();
        })
        .catch(error => console.log('error', error));
    }

    function setupEventHandlers () {
        console.log("setupEventHandlers 1");
    
        document.getElementById('movie-collection').addEventListener('submit', (e) => {
            e.preventDefault()
            console.log("comment button:", e.target.parentElement.querySelector('ul'))
            const ul = e.target.parentElement.querySelector('ul')
        // })
        // using spread operator to change html collection to array
        // can also use Array.from()
        // Array.from(document.getElementsByClassName('comment-btn')).forEach(btn => {
            // btn.addEventListener('click', () => {
                
              console.log('it was clicked')
              let commentValue = e.target.parentElement.querySelector("#comment-box").value; 
    
              let li = document.createElement("li");
              let text = document.createTextNode(commentValue);
              li.appendChild(text);
                //comments are only appending to the first box - how do I get them to append to the box the user is on
              ul.appendChild(li);
              e.target.parentElement.querySelector("#comment-box").value = ""
            
        //   })
        })
    }
    
    
    console.log('fetching movies')
    fetchMovie()


 
    let voteButtons = document.getElementsByClassName('vote-btn')
    let longMoviesBtn = document.getElementById("long-movies-btn")
    
    const movieCollection = document.getElementById('movie-collection') 

    //working filter functions:
    // let shortMovieArr = movies.filter((movie) => movie.runtimeInMinutes < 200)
    // let longMovieArr= movies.filter((movie) => movie.runtimeInMinutes > 200)
    
})