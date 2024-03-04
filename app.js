const container = document.querySelector('#gifs');
const input = document.querySelector('#input');

function addGIF(gif) {
  let results = gif.data.length;
  if (results) {
    let index = Math.floor(Math.random() * results);
    let newDiv = document.createElement('div');
    newDiv.classList.add('col-md-4', 'col-12', 'mb-4');
    let newImg = document.createElement('img');
    newImg.classList.add('w-100');
    newImg.src = gif.data[index].images.original.url;
    newDiv.append(newImg);
    container.append(newDiv);
  }
}

document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  let searchTerm = input.value;
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  addGIF(response.data);
  input.value = '';
});

document.querySelector('#remove').addEventListener('click', function () {
  container.innerHTML = '';
});
