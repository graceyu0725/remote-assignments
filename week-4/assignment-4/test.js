const url = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1";

function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

fetchData(url);
