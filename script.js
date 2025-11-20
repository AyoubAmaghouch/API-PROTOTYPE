//anjib 3anasir bache nbiyn fihum dowal
var catalogue = document.getElementById("countryCatalogue");

// جلب البيانات من API
fetch('https://countries-api-hsak.onrender.com/countries')
  .then(function(response) {
    return response.json(); // تحويل البيانات ل JSON
  })
  .then(function(data) {
    // عرض كل دولة على شكل بطاقة بسيطة
    for (var i = 0; i < data.length; i++) {
      var c = data[i];
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = "<img src='" + c.flag + "' alt='" + c.name + "'>" +
                       "<h3>" + c.name + "</h3>";
      catalogue.appendChild(card);
    }
  })
  .catch(function(error) {
    catalogue.innerHTML = "<p>Impossible de charger les pays</p>";
    console.error("Erreur :", error);
  });
