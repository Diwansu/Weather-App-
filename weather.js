
 function getData(city) {
   const date = new Date();
   let currentDate = `${date}`;

   const Location = document.getElementById("location");
   const Current = document.getElementById("current");

   fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5b9441056bba2ffb0d1da1631c7fc001`
   )
     .then((response) => response.json())
     .then((data) => {
       console.log(data);

       Location.innerHTML = `
        <div class="city">${data.name}, ${data.sys.country}</div>
        <div class="date">${currentDate.slice(0, 15)}</div>
      `;

       Current.innerHTML = `
        <div class="temp">${(data.main.temp - 273).toFixed(1)}°C</div>
        <div class="weather">${data.weather[0].main}</div>
        <div class="hi-low">${(data.main.temp_max - 273).toFixed(1)}°C / ${(
         data.main.temp_min - 273
       ).toFixed(1)}°C</div>
      `;
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }

 function handleSearch(event) {
   if (event.key === "Enter") {
     const searchInput = event.target.value;
     getData(searchInput);
   }
 }

 const searchInput = document.querySelector(".searchbox");
 searchInput.addEventListener("keypress", handleSearch);

 
 getData("Bangalore");
