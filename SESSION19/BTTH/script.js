let titleInput = document.getElementById("movie-title");
let descInput = document.getElementById("movie-desc");
let saveMovie = document.getElementById("save-movie");
let clearAll = document.getElementById("clear-all");
let listMovie = document.getElementById("movie-list");
let totalMovie = document.getElementById("list-count");
let customAlert = document.getElementById("custom-alert");

let movies = [];

const renderData = () => {
  movies = JSON.parse(localStorage.getItem("movieWishlist")) || movies;
  listMovie.innerHTML = "";

  movies.forEach((item) => {
    let divMovie = document.createElement("div");
    divMovie.className = "movie-card";
    divMovie.innerHTML = `
        <h4>🎥 ${item.title}</h4>
        <p>${item.description}</p>
        <button class="delete-item" onclick="deleteMovie(${item.id})">✖</button>
    `;
    listMovie.appendChild(divMovie);
  });

  totalMovie.innerText = `Danh sách của bạn (${movies.length})`;
  localStorage.setItem("movieWishlist", JSON.stringify(movies));
};

renderData();

saveMovie.addEventListener("click", () => {
  let title = titleInput.value.trim();
  let desc = descInput.value.trim();

  if (!title) {
    alert("Vui lòng nhập tiêu đề phim!");
    titleInput.focus();
    return;
  }

  let newMovie = {
    id: Date.now(),
    title: title,
    description: desc,
  };

  movies.push(newMovie);
  localStorage.setItem("movieWishlist", JSON.stringify(movies));

  titleInput.value = "";
  descInput.value = "";

  renderData();
});

const deleteMovie = (idMovie) => {
  let index = movies.findIndex((item) => {
    return item.id == idMovie;
  });

  movies.splice(index, 1);
  localStorage.setItem("movieWishlist", JSON.stringify(movies));
  renderData();
};

clearAll.addEventListener("click", () => {
  if (movies.length == 0) return;

  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách phim không?")) {
    movies = [];
    localStorage.setItem("movieWishlist", JSON.stringify(movies));
    renderData();
  }
});
