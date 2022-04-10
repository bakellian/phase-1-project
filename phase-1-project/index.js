
// at this point in the code this collection will be empty
// we have to wait for the html to be rendered once the network call returns.
// const postCommentBtn = document.getElementsByClassName('comment-btn');
console.log("loaded")

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
// setupEventHandlers(document.getElementsByClassName('comment-btn'))

// function setUpVoteButtons (voteButtons) {
//     console.log(voteButtons)
//     [...voteButtons].forEach(btn => {
//         btn.addEventListener('click', function() {
//             event.preventDefault();
//             console.log('vote button was clicked!')
//             let voteCount = document.
//         })
//     })
// }

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded 1")
    const movieCollection = document.getElementById('movie-collection') 
    function renderMovie(movie) {
        console.log("renderMovie 3")
        const movieInfo = 
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
        .then(result => {
            window.movies = result.docs
            result.docs.forEach(renderMovie)
            setupEventHandlers(document.getElementsByClassName('comment-btn'))
        })
        .catch(error => console.log('error', error));
    }
    
    console.log('fetching movies')
    fetchMovie()

    //filter buttons:
    // 1. click a button to show movies over 200 
    // 2. click a button to show mover under 200 
    // 3. click for all movies 

    function fliterMovies(movieArr) {
        // filter the data / show the data
        //heres the array - make it only 200 min movies 
        //try doing this in the console first and then move forward 
    }
 
    let voteButtons = document.getElementsByClassName('vote-btn')
    console.log(voteButtons)

    let longMoviesBtn = document.getElementById("long-movies-btn")
    console.log(longMoviesBtn)

    let shortMoviesBtn = document.getElementById("short-movies-btn")
    console.log(shortMoviesBtn)




})

console.log("step 100000")


//concept:
// allMovies = getMovies() 
//these are functions: 
// longMovies = moviesLongerThanMins(minutes, movies) // return only the movies longer than 'minutes'
// shortMovies = moviesShorterThanMins(minutes, movies) // return only the movies shorter than 'minutes' 