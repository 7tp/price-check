'use strict';

import clearList from './utils/clear-list';
import productList from './products-list';
import intoMoney from './utils/into-money';
import intoRubles from './utils/into-rubles';
import printPDF from './utils/print-pdf';

export default function receiveForm() {
    clearList();

    const totalSum = document.querySelectorAll('.input-total');
    
    document.querySelector('.input-seller-name').textContent = localStorage.getItem('sellerName');
    if (!!localStorage.getItem('sellerKPP')) {
        document.querySelector('.input-seller-inn-kpp').textContent = `ИНН ${localStorage.getItem('sellerINN')}, КПП ${localStorage.getItem('sellerKPP')}`;
    } else {
        document.querySelector('.input-seller-inn-kpp').textContent = `ИНН ${localStorage.getItem('sellerINN')}`;
    }
    document.querySelector('.input-seller-address').textContent = localStorage.getItem('sellerAddress');
    document.querySelector('.input-check-number').textContent = localStorage.getItem('checkNumber');
    document.querySelector('.input-check-date').textContent = localStorage.getItem('checkDate');

    document.querySelector('.input-sales-position').textContent = localStorage.getItem('salesPosition');
    document.querySelector('.input-sales-name').textContent = localStorage.getItem('salesName');

    let total = 0;
    let amount = 0;
    const productName = JSON.parse(localStorage.getItem('productNames'));
    const productMeasure = JSON.parse(localStorage.getItem('productMeasures'));
    const productAmount = JSON.parse(localStorage.getItem('productAmounts'));
    const productPrice = JSON.parse(localStorage.getItem('productPrices'));

    for (let i = 0; i < productName.length; i++) {
        total = total + productList(i, productName[i], productMeasure[i], productPrice[i], productAmount[i]);
        amount = i + 1;        
    }

    totalSum[0].textContent = intoMoney(total);
    totalSum[1].textContent = intoMoney(total);

    document.querySelector('.input-total-amount').textContent = amount;
    document.querySelector('.input-total-text').textContent = intoRubles(total);

    printPDF();
}