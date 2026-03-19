// Arrays holding movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A sarcastic hero takes on a dangerous mission." },
  { title: "Step Brothers", year: 2008, description: "Two grown men become awkward step siblings." },
  { title: "Anchorman", year: 2004, description: "A famous news anchor faces a changing newsroom." },
  { title: "The Hangover", year: 2009, description: "Friends retrace a wild night in Las Vegas." }
];

const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "A high-speed escape across a desert wasteland." },
  { title: "John Wick", year: 2014, description: "A retired hitman returns for revenge." },
  { title: "Die Hard", year: 1988, description: "An off-duty cop fights terrorists in a skyscraper." },
  { title: "The Dark Knight", year: 2008, description: "Batman battles chaos in Gotham City." }
];

const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "A prisoner never gives up hope or friendship." },
  { title: "Forrest Gump", year: 1994, description: "One man's life crosses major moments in history." },
  { title: "Fight Club", year: 1999, description: "An office worker forms a secret underground club." },
  { title: "The Godfather", year: 1972, description: "A family crime empire faces loyalty and power struggles." }
];

const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A team enters dreams to plant an idea." },
  { title: "The Matrix", year: 1999, description: "A hacker discovers reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Explorers travel through space to save humanity." },
  { title: "Blade Runner 2049", year: 2017, description: "A future detective uncovers a hidden secret." }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page using a <ul> and a for loop
  let movieListHTML = "<ul>";

  for (let i = 0; i < movieList.length; i++) {
    movieListHTML += `<li>
      <strong>${movieList[i].title}</strong> (${movieList[i].year})<br>
      ${movieList[i].description}
    </li>`;
  }

  movieListHTML += "</ul>";
  movieRecommendations.innerHTML = movieListHTML;
});