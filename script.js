let catalogue = document.getElementById("countryCatalogue");
let selectElement = document.getElementById("continentFilter");
let allCountries = [];

function displayCountries(data) {
  catalogue.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let country = data[i];
    let card = document.createElement("div");
    card.className = "card-list";

    card.setAttribute("data-id", country.name);

    card.innerHTML = `
      <img src="${country.flag}" width="120">
      <h2>${country.name}</h2>
      <p><strong>Continent:</strong> ${country.continent}</p>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Language:</strong> ${country.language}</p>
    `;

    //  click event
    card.addEventListener("click", () => {
      window.location.href = "country-details.html?id=" + country.name;
    });

    catalogue.appendChild(card);
  }
}

fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(res => res.json())
  .then(data => {
    allCountries = data;
    displayCountries(allCountries);
  })
  .catch(err => console.error(err));

selectElement.addEventListener("change", function() {
  let selected = selectElement.value;
  let filtered = [];

  if (selected === "all") {
    displayCountries(allCountries);
    return;
  }

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continent === selected) {
      filtered.push(allCountries[i]);
    }
  }

  displayCountries(filtered);
});
