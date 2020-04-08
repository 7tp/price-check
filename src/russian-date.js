'use strict';

const setRussianDate = (date) => {
    let newDate = new Date(date);
    let month = newDate.toLocaleString('ru',  { month: 'long', day: '2-digit'});
    let day = month.slice(0, 2);
    month = month.charAt(3).toUpperCase() + month.slice(4);

    newDate = `«${day}» ${month} ${newDate.getFullYear()}г.`
    return newDate;
}