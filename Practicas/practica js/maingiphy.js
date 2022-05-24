const nuestroForm = document.querySelector("form");
const nuestraImg = document.querySelector("img");
const nuestroParrafo = document.querySelector("p");

nuestroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value; 

    fetch("https://api.giphy.com/v1/gifs/search?api_key=fDZIF74C3G1KjuDcB2uMPwai4rBSdrs5&q=${input}&limit=5")
     .then(response => response.json())
     .then(json => {
         nuestraImg.src = json.data[0].images.original.url
     })
})