'use strict';

const form = document.querySelector('#ticket-form');
const kmInput = document.querySelector('#km');
const ageSelect = document.querySelector('#age-range');
const resultElement = document.querySelector('#result');

const pricePerKm = 0.21;

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const kilometers = parseFloat(kmInput.value);
    const age = ageSelect.value;

    // console.log(kilometers);
    // console.log(age);

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

    if (age === 'minorenne') {
        finalPrice = basePrice * 0.8;
    } else if (age === 'over65') {
        finalPrice = basePrice * 0.6;
    }

    resultElement.innerHTML = `Il prezzo finale è € ${finalPrice.toFixed(2)}`;
    
    
}

