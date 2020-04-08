'use strict';

const checkNumber = document.querySelector('input[name=check-number]');
const checkDate = document.querySelector('input[name=check-date]');

const sellerName = document.querySelector('input[name=seller-name]');
const sellerAddress = document.querySelector('input[name=seller-address]');
const sellerINN = document.querySelector('input[name=seller-inn]');
const sellerKPP = document.querySelector('input[name=seller-kpp]');
const salesPosition = document.querySelector('input[name=sales-position]');
const salesName = document.querySelector('input[name=sales-name]');

const sendForm = (event) => {
    event.preventDefault();
    clearList();

    const productName = document.querySelectorAll('input[name=product-name]');
    const productMeasure = document.querySelectorAll('input[name=product-measure]');
    const productAmount = document.querySelectorAll('input[name=product-amount]');
    const productPrice = document.querySelectorAll('input[name=product-price]');
    const totalSum = document.querySelectorAll('.input-total');
    
    const date = setRussianDate(checkDate.value);
     
    document.querySelector('.input-seller-name').textContent = sellerName.value;
    if (!!sellerKPP.value) {
        document.querySelector('.input-seller-inn-kpp').textContent = `ИНН ${sellerINN.value}, КПП ${sellerKPP.value}`;
    } else {
        document.querySelector('.input-seller-inn-kpp').textContent = `ИНН ${sellerINN.value}`;
    }
    document.querySelector('.input-seller-address').textContent = sellerAddress.value;
    document.querySelector('.input-check-number').textContent = checkNumber.value;
    document.querySelector('.input-check-date').textContent = date;

    document.querySelector('.input-sales-position').textContent = salesPosition.value;
    document.querySelector('.input-sales-name').textContent = salesName.value;

    let total = 0;
    let amount = 0;

    for (let i = 0; i < productName.length; i++) {
        total = total + productList(i, productName[i], productMeasure[i], productPrice[i], productAmount[i]);
        amount = i + 1;        
    }

    totalSum[0].textContent = intoMoney(total);
    totalSum[1].textContent = intoMoney(total);

    document.querySelector('.input-total-amount').textContent = amount;


    const pdfTable = document.querySelector('.table-section');
    const opt = {
        filename: `check №${checkNumber.value}.pdf`,
        html2canvas: {scale: 2},
        jsPDF: {}
    }
    html2pdf()
        .set(opt)
        .from(pdfTable)
        .save();
}