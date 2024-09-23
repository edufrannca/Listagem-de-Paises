// detalhes.js
async function fetchCountryDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('name');

    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    const country = await response.json();

    const data = country[0];

    document.getElementById('country-name').innerText = data.name.common;
    document.getElementById('country-flag').src = data.flags.png;
    document.getElementById('country-capital').innerText = data.capital;
    document.getElementById('country-region').innerText = data.region;
    document.getElementById('country-subregion').innerText = data.subregion;
    document.getElementById('country-population').innerText = data.population;
    document.getElementById('country-area').innerText = data.area;
    document.getElementById('country-languages').innerText = Object.values(data.languages).join(', ');
    document.getElementById('country-currencies').innerText = Object.values(data.currencies).map(currency => currency.name).join(', ');
    document.getElementById('country-timezones').innerText = data.timezones.join(', ');
    document.getElementById('country-calling-code').innerText = data.callingCodes.join(', ');
    document.getElementById('country-tld').innerText = data.tld.join(', ');
}

// Inicialização
fetchCountryDetails();
