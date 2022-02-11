const addMoney = document.querySelector('.deposit-money');
const takeMoney = document.querySelector('.withdraw-money');

let totalBankAmount = 0;
//user input amount 
function inputValueOfUser(inputValue) {
    let inputTextAmount = document.querySelector(inputValue);
    const currentValue = inputTextAmount.value;
    const inputAmount = parseFloat(currentValue);
    inputTextAmount.value = '';
    return inputAmount;

}

//deposit or withdraw amount
function giveOrtakeAmount(inputField, previousValue, check) {

    let previousTextValue = document.querySelector(previousValue);
    const currentAmount = previousTextValue.innerText;
    const previousAmount = parseFloat(currentAmount);
    if (check) {
        if (inputField > totalBankAmount) {
            previousTextValue.innerText = previousAmount;
        } else previousTextValue.innerText = inputField + previousAmount;
    } else previousTextValue.innerText = inputField + previousAmount;

}


//total amount in the bank
function totalAmountInAccount(userMoney, isDeposit) {
    let totalTextAmount = document.querySelector('#amount');
    const totalAmount = parseFloat(totalTextAmount.innerText);
    totalBankAmount = totalAmount;
    if (isDeposit) {
        totalBankAmount = totalAmount + userMoney;
    } else if (totalAmount < userMoney) {

        alert('insufficient balance');
    } else totalBankAmount = totalAmount - userMoney;
    totalTextAmount.innerText = totalBankAmount;
}




// Deposit money: 
addMoney.addEventListener('click', function() {
    // debugger
    const inputAmountOfUser = inputValueOfUser('.add-money');
    if (inputAmountOfUser > 0) {
        giveOrtakeAmount(inputAmountOfUser, '#deposit', false);
        totalAmountInAccount(inputAmountOfUser, true);
    }


})


//withdraw money from account
takeMoney.addEventListener('click', function() {

    const inputAmountOfUser = inputValueOfUser('.take-money');
    if (inputAmountOfUser > 0) {

        //total account balance:

        giveOrtakeAmount(inputAmountOfUser, '#withdraw', true);
        totalAmountInAccount(inputAmountOfUser, false);

    }

})