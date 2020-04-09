'use strict';

import setRussianDate from './utils/russian-date';

export default function sendForm(event) {
    event.preventDefault();
    localStorage.clear();

    const checkNumber = document.querySelector('input[name=check-number]');
    const checkDate = document.querySelector('input[name=check-date]');

    const sellerName = document.querySelector('input[name=seller-name]');
    const sellerAddress = document.querySelector('input[name=seller-address]');
    const sellerINN = document.querySelector('input[name=seller-inn]');
    const sellerKPP = document.querySelector('input[name=seller-kpp]');
    const salesPosition = document.querySelector('input[name=sales-position]');
    const salesName = document.querySelector('input[name=sales-name]');

    const productName = document.querySelectorAll('input[name=product-name]');
    const productMeasure = document.querySelectorAll('input[name=product-measure]');
    const productAmount = document.querySelectorAll('input[name=product-amount]');
    const productPrice = document.querySelectorAll('input[name=product-price]');
    
    localStorage.setItem('sellerName', sellerName.value);
    localStorage.setItem('sellerINN', sellerINN.value);
    localStorage.setItem('sellerKPP', sellerKPP.value);
    localStorage.setItem('sellerAddress', sellerAddress.value);
    localStorage.setItem('checkNumber', checkNumber.value);
    localStorage.setItem('checkDate', setRussianDate(checkDate.value));
    localStorage.setItem('salesPosition', salesPosition.value);
    localStorage.setItem('salesName', salesName.value);

   const products = [];
    productName.forEach(function(name, i) {
        return products[i] = name.value;
    });
    const measures = [];
    productMeasure.forEach(function(measure, i) {
        return measures[i] = measure.value;
    });
    const amounts = [];
    productAmount.forEach(function(amount, i) {
        return amounts[i] = amount.value;
    });
    const prices = [];
    productPrice.forEach(function(price, i) {
        return prices[i] = price.value;
    });

    localStorage.setItem('productNames', JSON.stringify(products));
    localStorage.setItem('productMeasures', JSON.stringify(measures));
    localStorage.setItem('productAmounts', JSON.stringify(amounts));
    localStorage.setItem('productPrices', JSON.stringify(prices));

    window.open("check.html","_blank");

}