function calcSum() {
  const xhr = new XMLHttpRequest();

  const number = document.querySelector("#numberInput").value;
  const url = `http://localhost:3000/getData?number=${number}`;

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result = JSON.parse(xhr.responseText);
      console.log(result);
      document.getElementById("result").innerHTML = "Result: " + result.message;
    }
  };

  xhr.send();
}
