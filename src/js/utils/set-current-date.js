'use strict';

export default function setCurrentDate() {
    const checkDate = document.querySelector('input[name=check-date]');

    const today = new Date;
    let day = today.getDate();
    let month = today.getMonth() + 1;

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    
    const todayDate = `${today.getFullYear()}-${month}-${day}`;
    checkDate.value = todayDate;
}
