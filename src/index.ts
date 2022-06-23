const toFrom = document.querySelector('#toFromInput') as HTMLInputElement;
const creditDebit = document.querySelector('#creditDebitSelect') as HTMLInputElement;
const amount = document.querySelector('#amountInput') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLTextAreaElement;
const sendEmail = document.querySelector('#sendEmail') as HTMLInputElement

const form = document.querySelector('#form') as HTMLFormElement;

interface transactionInterface {
    creditDebit: string,
        toFrom: string,
        amount: number, 
        details: string, 
        sendEmail: boolean
}


form.addEventListener('submit',(event) => {
    event.preventDefault();

    const transaction: transactionInterface = {
        creditDebit: creditDebit.value, 
        toFrom: toFrom.value,
        amount: amount.valueAsNumber, 
        details: details.value, 
        sendEmail:sendEmail.checked, 
    }

    renderTransaction(transaction)
    
})

const renderTransaction = (t: transactionInterface) => {
    const tableRow = document.createElement('tr');

    const creditDebitData = document.createElement('td');
    creditDebitData.innerHTML = t.creditDebit;

    const toFromData = document.createElement('td');
    toFromData.innerHTML = t.toFrom;

    const amountData = document.createElement('td');
    amountData.innerHTML = t.amount.toString();

    const detailsData = document.createElement('td');
    detailsData.innerHTML = t.details;

    tableRow.append(creditDebitData)
    tableRow.append(toFromData)
    tableRow.append(amountData)
    tableRow.append(detailsData)

    const tBody = document.querySelector('tbody')!;

    tBody.prepend(tableRow)
}