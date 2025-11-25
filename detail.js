let countriesDetail = document.getElementById("country-detail");
let country = JSON.parse(sessionStorage.getItem("selectedCountry"));


// nkhaznasm deyal dowla mn session storage
 countriesDetail.innerHTML = `
  <h1>${country.name}</h1>
  <img src="${country.flag}" width="200">
    <p><strong>Continent:</strong> ${country.continent}</p>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Language:</strong> ${country.language}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Area:</strong> ${country.area} km²</p>
 `; 