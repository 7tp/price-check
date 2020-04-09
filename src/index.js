'use srtict';

import './index.css'
import sendForm from './js/send-form';
import setCurrentDate from './js/utils/set-current-date';
import addRow from './js/add-form-row';

const checkForm = document.querySelector('form[name=check-form]');
const addFormRowButton = document.querySelector('.product-info__add-row');

checkForm.addEventListener('submit', sendForm);
addFormRowButton.addEventListener('click', addRow);

setCurrentDate();
addRow();
