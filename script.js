let catalogue = document.getElementById("countryCatalogue");
let selectElement = document.getElementById("continentFilter");
let allCountries = [];

function displayCountries(data) {
  catalogue.innerHTML = "";
  data.forEach(country => {
    let card = document.createElement("div");
    card.className = "card-list";
    card.innerHTML = `
      <img src="${country.flag}" alt="Flag of ${country.name}" class="country-flag" width="120">
      <h2>${country.name}</h2>
      <p><strong>Continent:</strong> ${country.continent}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
    `;

    catalogue.appendChild(card);
  });
}

fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(res => res.json())
  .then(data => {
    allCountries = data;
    displayCountries(allCountries);

  })
  .catch(err => console.error(err));
  


selectElement.addEventListener("change", () => {
  let selected = selectElement.value;

  if (selected === "all") {
    displayCountries(allCountries);
    return;
  }
    let filtered = allCountries.filter(c=>c.continent === selected);
    displayCountries(filtered);
});