const nuestroForm = document.querySelector('form');
const nuestraImg = document.querySelector('img');
const nuestroTitle = document.querySelector('movie-info');
const nuestroOverview = document.querySelector('overview');

nuestroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;

    fetch('https://api.themoviedb.org/3/movie/550?api_key=0a48637900a1209da089f9ed0677caf4&')
})
    