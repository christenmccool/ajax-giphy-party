const form = document.querySelector("#searchform");
const search = document.querySelector("#search");
const gifDiv = document.querySelector("#gif-div");
const delBtn = document.querySelector("#del-btn");


const key = "PCqBTCLAsaOdjuBfJeEjBKrIjsmfqZBT";

async function getGIF(api_key, q) {
    const results = await axios.get('http://api.giphy.com/v1/gifs/search', {params : {api_key, q, limit: 50}})

    const gifind = Math.floor(Math.random() * results.data.data.length)
    const gifURL = results.data.data[gifind].images.fixed_height.url;
    const newImg = document.createElement('img');
    newImg.classList.add("m-2")
    newImg.src = gifURL;
    gifDiv.append(newImg);

}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getGIF(key, search.value);
})

delBtn.addEventListener('click', () => {
    gifDiv.innerHTML = "";
})


