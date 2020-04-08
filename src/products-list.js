'use strict';

const productList = (schedule, name, measure, price, amount) => {
    const template = document.querySelector('#template-row').content.querySelector('.table__list');
    const templateClone = template.cloneNode(true);

    let thisPrice = price.value;
    let thisAmount = amount.value;
    
    thisPrice = +thisPrice;
    thisAmount = +thisAmount;

    const sum = thisPrice * thisAmount;

    templateClone.querySelector('.input-numbering').textContent = schedule + 1;
    templateClone.querySelector('.input-product-name').textContent = name.value;
    templateClone.querySelector('.input-product-measure').textContent = measure.value;
    templateClone.querySelector('.input-product-price').textContent = intoMoney(thisPrice);
    templateClone.querySelector('.input-product-amount').textContent = amount.value;
    templateClone.querySelector('.input-product-sum').textContent = intoMoney(sum);
    document.querySelector('.table__body').appendChild(templateClone);
    
    return sum;
}