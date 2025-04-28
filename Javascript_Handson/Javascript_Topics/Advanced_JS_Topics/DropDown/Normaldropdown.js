/*
  1️⃣ Normal Dropdown Functionality
*/
let cities = ['Chennai', 'Mumbai', 'Kolkata', 'Delhi'];
cities.unshift('All Cities'); // Add default option

let dropdown = document.getElementById('dropdown');

// Populate dropdown
cities.forEach(city => {
  let option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  dropdown.appendChild(option);
});

// Log selected value
dropdown.addEventListener('change', function () {
  console.log(`Selected city: ${this.value}`);
});
