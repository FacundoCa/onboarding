"use strict";
const toFrom = document.querySelector('#toFromInput');
const creditDebit = document.querySelector('#creditDebitSelect');
const amount = document.querySelector('#amountInput');
const details = document.querySelector('#details');
const sendEmail = document.querySelector('#sendEmail');
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const transaction = {
        creditDebit: creditDebit.value,
        toFrom: toFrom.value,
        amount: amount.valueAsNumber,
        details: details.value,
        sendEmail: sendEmail.checked,
    };
    renderTransaction(transaction);
});
const renderTransaction = (t) => {
    const tableRow = document.createElement('tr');
    const creditDebitData = document.createElement('td');
    creditDebitData.innerHTML = t.creditDebit;
    const toFromData = document.createElement('td');
    toFromData.innerHTML = t.toFrom;
    const amountData = document.createElement('td');
    amountData.innerHTML = t.amount.toString();
    const detailsData = document.createElement('td');
    detailsData.innerHTML = t.details;
    tableRow.append(creditDebitData);
    tableRow.append(toFromData);
    tableRow.append(amountData);
    tableRow.append(detailsData);
    const tBody = document.querySelector('tbody');
    tBody.prepend(tableRow);
};
