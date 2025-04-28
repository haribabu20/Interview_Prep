/*
  3️⃣ API-Driven Dropdown
*/
document.addEventListener("DOMContentLoaded", function () {
  let dropdownAPI = document.getElementById('dropdownAPI');

  async function fetchCities() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users"); // Example API
      if (!response.ok) throw new Error("Failed to fetch cities");

      let users = await response.json();
      let cities = users.map(user => user.address.city); // Extract city names

      // Populate dropdown
      dropdownAPI.innerHTML = cities.map(city => `<option value="${city}">${city}</option>`).join('');
    } catch (error) {
      console.error("Error fetching cities:", error);
      dropdownAPI.innerHTML = `<option value="">Failed to load cities</option>`;
    }
  }

  fetchCities();
});
