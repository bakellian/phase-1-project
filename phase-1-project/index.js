const movieCollection = document.getElementById('movie-collection') 

document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
})

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

function fetchMovies() {
    fetch("https://the-one-api.dev/v2/movie", {headers: {Authorization: 'Bearer 07MCBm8QqP0vQVu9yGIR'}})
    .then(response => response.json())
    .then(result => {
        movies = result.docs
        movies.forEach(movie => renderMovie(movie))
        addComment();
        showShortMovies();
        showLongMovies();
        showAllMovies();  
    })
    .catch(error => console.log('error', error));
}

function showShortMovies() {
    const shortMoviesBtn = document.getElementById("short-movies-btn")
    const shortMovieArr = movies.filter((movie) => movie.runtimeInMinutes < 200)
    shortMoviesBtn.addEventListener('click', () => { 
        movieCollection.innerHTML = ""
        shortMovieArr.forEach(renderMovie)
    })
}

function showLongMovies() {
    const longMoviesBtn = document.getElementById('long-movies-btn')
    const longMovieArr = movies.filter((movie) => movie.runtimeInMinutes > 200)
    longMoviesBtn.addEventListener('click', () => {
        movieCollection.innerHTML = ""
        longMovieArr.forEach(renderMovie)
    })
}

function showAllMovies() {
    const allMoviesBtn = document.getElementById("all-movies-btn")
    allMoviesBtn.addEventListener("click", function() {
        movieCollection.innerHTML = ""
        movies.forEach(renderMovie)
    })
}

function addComment () {
    document.getElementById('movie-collection').addEventListener('submit', (e) => {
        e.preventDefault()
        console.log("comment button:", e.target.parentElement.querySelector('ul'))
        const ul = e.target.parentElement.querySelector('ul')
        let commentValue = e.target.parentElement.querySelector("#comment-box").value; 
        let li = document.createElement("li");
        let text = document.createTextNode(commentValue);
        li.appendChild(text);
        ul.appendChild(li);
        e.target.parentElement.querySelector("#comment-box").value = ""
    })
}

    
  


