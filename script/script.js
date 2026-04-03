'use strict';

const form = document.querySelector('#ticket-form');
const nameInput = document.querySelector('#name');
const kmInput = document.querySelector('#km');
const ageSelect = document.querySelector('#age-range');
const resultElement = document.querySelector('#result');

const pricePerKm = 0.21;

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const kilometers = parseFloat(kmInput.value);
    const age = ageSelect.value;

    // console.log(kilometers);
    // console.log(age);

    if (name === ''){
        resultElement.innerHTML = 'Inserisci nome e cognome';
        return;
    }

    if (isNaN(kilometers) || kilometers <= 0) {
        resultElement.innerHTML = 'Chilometri non validi';
        return;
    }

    if (age === '') {
        resultElement.innerHTML = 'Seleziona una fascia di età';
        return;
    }

    const basePrice = kilometers * pricePerKm;
    let finalPrice = basePrice;
    let offer = 'Biglietto standard';

    if (age === 'minorenne') {
        finalPrice = basePrice * 0.8;
        offer = 'Sconto minorenni';
    } else if (age === 'over65') {
        finalPrice = basePrice * 0.6;
        offer = 'Sconto over 65';
    }

    resultElement.innerHTML = `
    <p><strong>Nome passeggero:</strong> ${name}</p>
    <p><strong>Offerta:</strong> ${offer}</p>
    <p><strong>Prezzo finale:</strong> € ${finalPrice.toFixed(2)}</p>`;
    
}

