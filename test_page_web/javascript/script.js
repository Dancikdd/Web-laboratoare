document.getElementById("formular").addEventListener("submit", function(e) {
  e.preventDefault();

  var titlu = document.getElementById("titlu").value;
  var descriere = document.getElementById("descriere").value;

  if (titlu === "" || descriere === "") {
    return;
  }

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "<b>" + titlu + "</b><p>" + descriere + "</p>";

  document.getElementById("lista").appendChild(card);

  document.getElementById("titlu").value = "";
  document.getElementById("descriere").value = "";
});