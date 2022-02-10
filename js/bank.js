const addMoney = document.querySelector('.deposit-money');
const takeMoney = document.querySelector('.withdraw-money');

let inputWithdrawAmount = document.querySelector('.withdraw-money').value;
let totalTextAmount = document.querySelector('#amount');
let totalAmount = parseFloat(totalTextAmount.innerText);


// Deposit money: 
addMoney.addEventListener('click', function() {
    let textDepositAmount = document.querySelector('.add-money');
    const inputDepositAmount = parseFloat(textDepositAmount.value); //input deposit value
    console.log(inputDepositAmount);
    if (inputDepositAmount < 0) {
        alert('please provide valid amount');
    } else {
        let totalDeposit = document.querySelector('#deposit'); //total deposit value
        let currentDeposit = parseFloat(totalDeposit.innerText);
        console.log(currentDeposit);
        newTotalDeposit = inputDepositAmount + currentDeposit;
        console.log(newTotalDeposit);
        totalDeposit.innerText = newTotalDeposit;

        //total amount
        totalAmount = totalAmount + inputDepositAmount;
        console.log(totalAmount);
        totalTextAmount.innerText = totalAmount;

    }
    textDepositAmount.value = '';
})


//withdraw money from account
takeMoney.addEventListener('click', function() {
    let textWithdrawAmount = document.querySelector('.take-money');
    const inputWithdrawAmount = parseFloat(textWithdrawAmount.value);
    if (inputWithdrawAmount < 0) {
        alert('invalid amount request');
    } else if (inputWithdrawAmount > totalAmount) {
        alert('not available balance,please deposit first');
    } else {
        let withdrawnMoney = document.querySelector('#withdraw');
        let withdrawnMoneyValue = parseFloat(withdrawnMoney.innerText);
        let totalWithdrawnAmount = withdrawnMoneyValue + inputWithdrawAmount;
        withdrawnMoney.innerText = totalWithdrawnAmount;

        //total account balance:
        totalAmount = totalAmount - inputWithdrawAmount;
        console.log(totalAmount);
        totalTextAmount.innerText = totalAmount;
    }
    textWithdrawAmount.value = '';
})