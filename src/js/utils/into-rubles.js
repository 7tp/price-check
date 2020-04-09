'use strict';

export default function intoRubles(money) {
    const rubles = require('rubles').rubles;
    const text = rubles(money);
    return text[0].toUpperCase() + text.slice(1) + '.';
}