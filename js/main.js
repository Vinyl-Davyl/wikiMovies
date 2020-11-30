// $(document).ready(() => {
//     $('#searchForm').on('submit', (e) => {
//         let searchText = $('#searchText').val();
//         getMovies(searchText);
//         e.preventDefault();
//     });
// });

// function getMovies(searchText){
//     axios.get('http://omdbapi.com/?apikey=67abO474&s='+searchText)
//         .then((response) => {
//             console.log(response);
//             let movies = response.data.Search;
//             let output = '';
//             //To iterate through each movie
//             $.each(movies, (index, movie) => {
//                 output += `
//                     <div class="col-md-3">
//                         <div class="well text-center">
//                         <img src="${movie.Poster}">
//                             <h5>${movie.Title}</h5>
//                             <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//                         </div>
//                     </div>
//                 `;
//             });

//             $('#movies').html(output);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// function movieSelected(id){
//     sessionStorage.setItem('movieId', id);
//     window.location = 'movie.html';
//     return false;
// }

// function getMovie(){
//     let movieId = sessionStorage.getItem('movieId');

//     axios.get('http://www.omdbapi.com?i='+movieId)
//     .then((response) => {
//         console.log(response);
//         let movie = response.data;

//         let output =`
//         <div class="row">
//             <div class="col-md-4">
//                 <img src="${movie.Poster}" class="thumbnail">
//             </div>
//             <div class="col-md-8">
//                 <h2>${movie.Title}</h2>
//                 <ul class="list-group">
//                     <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
//                     <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
//                     <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
//                     <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
//                     <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
//                     <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
//                     <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
//                 </ul>
//             </div>
//         </div>
//         <div class="row">
//             <div class="well">
//                 <h3>Plot</h3>
//                 ${movie.Plot}
//                 <hr>
//                 <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
//                 <a href="index.html" class="btn btn-default">Go back to Search</a>
//             </div>
//         </div>
//         `;

//         $('#movie').html(output);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }






document.getElementById("search-btn").addEventListener("click", () => {
    searchTerm = document.getElementById("searchParameter").value;
     
     fetch(`https://www.omdbapi.com/?apikey=67ab0474&s=${searchTerm}`).then(response => response.json()).then(data => {
       const movies = data.Search.map(movie => {
         return `<img src="${movie.Poster}"  onclick="info('${movie.imdbID}')"/>`
       }).join('');
       document.getElementById('app').innerHTML = movies;
     }
     )
     
   });
   
   
     function info(imdb) {
         fetch(`https://www.omdbapi.com/?apikey=67ab0474&i=${imdb}`).then(response => response.json()).then(data => {
         document.getElementById('description').innerHTML = "Movie Title: " + data.Title + "<br />" + "The Movie Was Released: " + data.Released + "<br />" + "The Movie Is Rated: " + data.Rated + "<br />" + "Writer: " + data.Director + "<br />" + "Actors: " + data.Actors;
       })
    }
     
   
   