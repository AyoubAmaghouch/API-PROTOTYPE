fetch("https://countries-api-hsak.onrender.com/api/countries") // kanjib bayanat we nkhaznhom fe all countries
  .then(res => res.json())
  .then(data => {
    allCountries = data;
    displayCountries(allCountries);
  })
  .catch(err => console.error(err));
let catalogue = document.getElementById("countryCatalogue");
let selectElement = document.getElementById("continentFilter");
let allCountries = []; // kankhzno api hnaya

function displayCountries(data) {
  catalogue.innerHTML = ""; // kanmsho ayi hja qdima mli kaytbdl filter

  for (let i = 0; i < data.length; i++) { //loop
    let country = data[i];
    let card = document.createElement("div"); // div le kole carta
    card.className = "card-list";

    card.setAttribute("data-id", country.name); // knkhazno ism deyal kol dawla fe id

    card.innerHTML = `
      <img src="${country.flag}" width="120">      
      <h2>${country.name}</h2>
      <p><strong>Continent:</strong> ${country.continent}</p>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Language:</strong> ${country.language}</p>
    `; // ma3lomat de la cart

    //  click event bache nmxiw ne tafasil de dowal
    card.addEventListener("click", () => {
      sessionStorage.setItem("selectedCountry", JSON.stringify(country)); // khznasm deyal dowla mli nkliw 3liha
      window.location.href = "country-details.html?id=" + country.name;
    });

    catalogue.appendChild(card); // add cartane kol sfha
  }
}



selectElement.addEventListener("change", function() { // filter deyal qart
  let selected = selectElement.value;
  let filtered = [];

  if (selected === "all") { // il khetar all nrj3 ne kulxi me 0
    displayCountries(allCountries);
    return;
  }

  for (let i = 0; i < allCountries.length; i++) { // if khtar qaramo3ayana
    if (allCountries[i].continent === selected) {
      filtered.push(allCountries[i]);
    }
  }

  displayCountries(filtered); // anfichiw dowal li tflitraw 
});