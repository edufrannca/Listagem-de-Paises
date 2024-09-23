// script.js
const countryList = document.getElementById('country-list');
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('region-filter');
const loadMoreButton = document.getElementById('load-more');

let countries = [];
let displayedCountries = 0;
const countriesPerPage = 10;

// Função para buscar dados da API
async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    countries = await response.json();
    renderCountries();
}

// Função para renderizar os países
function renderCountries() {
    const filteredCountries = applyFilters(countries);
    const paginatedCountries = filteredCountries.slice(displayedCountries, displayedCountries + countriesPerPage);

    paginatedCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card col-md-3';
        countryCard.innerHTML = `
            <h5>${country.name.common}</h5>
            <img src="${country.flags.png}" alt="Bandeira de ${country.name.common}" class="img-fluid">
            <p>Capital: ${country.capital}</p>
            <p>Região: ${country.region}</p>
            <a href="detalhes.html?name=${country.name.common}" class="btn btn-info">Detalhes</a>
        `;
        countryList.appendChild(countryCard);
    });
    
    displayedCountries += countriesPerPage;
}

// Função para aplicar filtros
function applyFilters(countries) {
    const searchValue = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;

    return countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchValue);
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
        return matchesSearch && matchesRegion;
    });
}


// Evento de busca e filtro
searchInput.addEventListener('input', () => {
    displayedCountries = 0;
    countryList.innerHTML = '';
    renderCountries();
});

regionFilter.addEventListener('change', () => {
    displayedCountries = 0;
    countryList.innerHTML = '';
    renderCountries();
});

// Evento para carregar mais países
loadMoreButton.addEventListener('click', renderCountries);

// Inicialização
fetchCountries();

// Selecionar o botão
const backToTopButton = document.getElementById('back-to-top');

// Mostrar o botão ao rolar para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função para voltar ao topo
backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
