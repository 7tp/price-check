'use srtict';

export default function addRow() {
    const templateProducts = document.querySelector('#template-products').content.querySelector('.product-info');
    const templateClone = templateProducts.cloneNode(true);
    const sum = templateClone.querySelector('input[name=product-sum]');
    const amount = templateClone.querySelector('input[name=product-amount]');
    const price = templateClone.querySelector('input[name=product-price]');

    document.querySelector('.products').appendChild(templateClone);

    const deleteRow = () => templateClone.remove(); 
    templateClone.querySelector('.product-info__delete').addEventListener('click', deleteRow);

    const multiply = (x, y) => {
        x = x.match(/[0-9\.]/g).join('');
        y = y.match(/[0-9\.]/g).join('');
        x = +x;
        y = +y;

        const z = x * y;
        amount.value = x;
        price.value = y.toFixed(2);
        sum.value = z.toFixed(2);
    }

    price.addEventListener('change', function() {
        amount.addEventListener('change', function() {multiply(amount.value, price.value)});
        multiply(amount.value, price.value);
    });
    sum.addEventListener('change', function () {
        let z = sum.value;
        console.log(z)
        z = z.match(/[0-9\.]/g).join('');
        console.log(z)
        z = +z;
        const x = z / +amount.value;
        price.value = x.toFixed(2);
        sum.value = z.toFixed(2);
    })
}
