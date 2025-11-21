//anjib 3anasir bache nbiyn fihum dowal
let catalogue = document.getElementById("countryCatalogue");
let selectElement = document.getElementById("continentFilter");
let allCountries = [];

fetch('https://countries-api-hsak.onrender.com/api/countries')
  .then((response) => response.json())
  .then (data => {console.log(data);

    for (let i = 0; i < data.length; i++) {
        let countryCard = document.createElement("div"); 
        countryCard.className = "card-list";
        countryCard.innerHTML =`
        <img src="${data[i].flag}" alt="Flag of ${data[i].name}" class="country-flag"/>
        <h2 class="country-name">${data[i].name}</h2>
        <p class="country-capital"><strong>Capital:</strong> ${data[i].capital}</p>` ;

             catalogue.appendChild(countryCard);



    }
    
  })
    .catch((error) => console.error('Error fetching country data:', error));
    
selectElement.addEventListener("change", function() {
    let selectedContinent = selectElement.value;
    if (selectedContinent === "all") {
        displaycountries(catalogue);
    } else {
        let filteredCountries = catalogue.filter(country => country.continent === selectedContinent);
        displaycountries(filteredCountries);
    }});
