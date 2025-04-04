/*
  2️⃣ Dependent Dropdown (Category → City)
*/

let categoryDropdown = document.getElementById('category');
let cityDropdown = document.getElementById('selected');

// City data based on category
let citiesData = {
  metro: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
  nonMetro: ['Bhopal', 'Jaipur', 'Lucknow', 'Patna']
};

// Update city dropdown based on category selection
categoryDropdown.addEventListener('change', function () {
  let selectedCategory = this.value;
  cityDropdown.innerHTML = '<option value="">--Select a City--</option>'; // Reset dropdown

  if (selectedCategory in citiesData) {
    citiesData[selectedCategory].forEach(city => {
      let option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    });
  }
});
