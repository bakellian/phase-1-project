document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded 1")

    function renderMovie(movie) {
        console.log("renderMovie 3")
        let movieInfo = 
          `<div class="card">
            <h2>${movie.name}</h2>
            <p><b>Rotten Tomatoes Score:</b> ${movie.rottenTomatoesScore}</p>
            <p><b>Your Votes:</b>
                <p id="vote-section">123</p>
            <p><b>Box Office Revenue:</b> ${movie.boxOfficeRevenueInMillions} million</p>
            
            <h3>comments:</h3>
                <ul id="unordered">

                </ul>
            <input type="text" id="comment-box" placeholder="Enter comment">
            <button class="comment-btn" id="${movie.id}">COMMENT</button>
            <button class="vote-btn" id="${movie.id}">VOTE</button>
          </div>`
        
          movieCollection.innerHTML += movieInfo
    }

    function fetchMovie() {
        fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
        .then(response => response.json())
        .then(data => movies = data) // assigning the fetch to a variable
        .then(result => {
            console.log(movies) //this is to see the movie collection in the console
            window.movies = result.docs
            result.docs.forEach(renderMovie)
            setupEventHandlers(document.getElementsByClassName('comment-btn'))
        })
        .catch(error => console.log('error', error));
    }

    function setupEventHandlers (postCommentBtns) {
        console.log("setupEventHandlers 1");
    
        // using spread operator to change html collection to array
        // can also use Array.from()
        [...postCommentBtns].forEach(btn => {
            btn.addEventListener('click', function() {
              event.preventDefault();
              console.log('it was clicked')
              let commentValue = document.getElementById("comment-box").value; 
    
              let li = document.createElement("li");
              let text = document.createTextNode(commentValue);
              li.appendChild(text);
                //comments are only appending to the first box - how do I get them to append to the box the user is on
              document.getElementById("unordered").appendChild(li);
              
              //need to work on clearing comment box after comment is sent 
          })
        })
    }
    
    
    console.log('fetching movies')
    fetchMovie()


 
    let voteButtons = document.getElementsByClassName('vote-btn')
    let longMoviesBtn = document.getElementById("long-movies-btn")
    let shortMoviesBtn = document.getElementById("short-movies-btn")
    const movieCollection = document.getElementById('movie-collection') 

    //working filter functions:
    // let shortMovieArr = movies.filter((movie) => movie.runtimeInMinutes < 200)
    // let longMovieArr= movies.filter((movie) => movie.runtimeInMinutes > 200)
    
})


//concept:
// allMovies = getMovies() 
//these are functions: 
// longMovies = moviesLongerThanMins(minutes, movies) // return only the movies longer than 'minutes'
// shortMovies = moviesShorterThanMins(minutes, movies) // return only the movies shorter than 'minutes' 