let cities = [];

function addCity() {
    let cityName = '';
    let citySelect = document.getElementById('citySelect');
    let selectedOption = citySelect.options[citySelect.selectedIndex];
    if (selectedOption.value === 'other') {
        cityName = document.getElementById('cityNameOther').value.trim();
        if (cityName === '') {
            alert('Please enter a city name.');
            return;
        }
    } else {
        cityName = selectedOption.value;
    }

    let cityTemperature = parseFloat(document.getElementById('cityTemperature').value);

    if (cityName === '' || isNaN(cityTemperature)) {
        alert('Please select a city and enter a valid temperature.');
        return;
    }

    cities.push({ name: cityName, temperature: cityTemperature });
    displayCities();
    calculateStatistics();
    clearInputFields();
}

function displayCities() {
    let cityList = document.getElementById('cityList');
    cityList.innerHTML = ''; // Clear the list before adding cities
    cities.forEach(city => {
        let li = document.createElement('li');
        li.textContent = `${city.name}: ${city.temperature}°C`;
        cityList.appendChild(li);
    });
}

function calculateStatistics() {
    if (cities.length === 0) {
        document.getElementById('averageTemperature').textContent = 'N/A';
        document.getElementById('hottestCity').textContent = 'N/A';
        document.getElementById('coldestCity').textContent = 'N/A';
        return;
    }

    let totalTemperature = cities.reduce((acc, city) => acc + city.temperature, 0);
    let averageTemperature = totalTemperature / cities.length;
    document.getElementById('averageTemperature').textContent = averageTemperature.toFixed(2);

    let hottestCity = cities.reduce((prev, current) => prev.temperature > current.temperature ? prev : current);
    document.getElementById('hottestCity').textContent = `${hottestCity.name} (${hottestCity.temperature}°C)`;

    let coldestCity = cities.reduce((prev, current) => prev.temperature < current.temperature ? prev : current);
    document.getElementById('coldestCity').textContent = `${coldestCity.name} (${coldestCity.temperature}°C)`;
}

function clearInputFields() {
    document.getElementById('citySelect').value = '';
    document.getElementById('cityNameOther').value = '';
    document.getElementById('cityTemperature').value = '';
    hideCityNameOther();
}

function hideCityNameOther() {
    document.getElementById('cityNameOther').style.display = 'none';
}

function showCityNameOther() {
    document.getElementById('cityNameOther').style.display = 'block';
}

document.getElementById('citySelect').addEventListener('change', function() {
    if (this.value === 'other') {
        showCityNameOther();
    } else {
        hideCityNameOther();
    }
});
