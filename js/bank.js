const addMoney = document.querySelector('.deposit-money');
const takeMoney = document.querySelector('.withdraw-money');

let inputWithdrawAmount = document.querySelector('.withdraw-money').value;

addMoney.addEventListener('click', function() {
    let textDepositAmount = document.querySelector('.add-money');
    const inputDepositAmount = textDepositAmount.value; //input value
    console.log(inputDepositAmount);
    if (inputDepositAmount < 0) {
        alert('please provide valid amount');
    } else {
        let totalDeposit = document.querySelector('#deposit'); //total deposit value
        let currentDeposit = totalDeposit.innerText;
        console.log(currentDeposit);
        newTotalDeposit = parseFloat(inputDepositAmount) + parseFloat(currentDeposit);
        console.log(newTotalDeposit);
        totalDeposit.innerText = newTotalDeposit;

    }
    textDepositAmount.value = '';
})