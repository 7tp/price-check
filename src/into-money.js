'use strict';

const intoMoney = (price) => {
    price = price.toFixed(2);
    const kop = price.replace(/\d+\./, '.');
    price = price.replace(/\.\d+/, '');
    let result = '';
    while (price.length > 3) {
        let quotePart = price.slice(-3);
        price = price.slice(0, price.length - 3);
        result = `'${quotePart}${result}`;
    }
    return price + result + kop;
}