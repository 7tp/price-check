'use strict';

import intoMoney from './utils/into-money';

export default function productList(schedule, name, measure, price, amount) {
    const template = document.querySelector('#template-row').content.querySelector('.table__list');
    const templateClone = template.cloneNode(true);

    const sum = +price * +amount;

    templateClone.querySelector('.input-numbering').textContent = schedule + 1;
    templateClone.querySelector('.input-product-name').textContent = name;
    templateClone.querySelector('.input-product-measure').textContent = measure;
    templateClone.querySelector('.input-product-price').textContent = intoMoney(+price);
    templateClone.querySelector('.input-product-amount').textContent = amount;
    templateClone.querySelector('.input-product-sum').textContent = intoMoney(sum);
    document.querySelector('.table__body').appendChild(templateClone);
    
    return sum;
}