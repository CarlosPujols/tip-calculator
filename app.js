const billAmount = document.getElementById('bill-amount');
const fivePercent = document.getElementById('five');
const tenPercent = document.getElementById('ten');
const fifteenPercent = document.getElementById('fifteen');
const twentyfivePercent = document.getElementById('twentyfive');
const fiftyPercent = document.getElementById('fifty');
const customTip = document.getElementById('custom-tip');
const peopleNumber = document.getElementById('people-number');
const tipAmountResult = document.getElementById('tip-amount-result');
const totalResult = document.getElementById('total-result');
const zeroValidator = document.getElementById('zero-validator');
const resetButton = document.getElementById('reset-button');

var billNum = 0;
var tipPercentage = 0;
var peopleNum = 0;

window.addEventListener('load', defaultActions);

function defaultActions(){
    tipAmountResult.innerHTML = "$0.00";
    totalResult.innerHTML = "$0.00";
}

billAmount.addEventListener('input', bill)

function bill (){
    billNum = (Number(billAmount.value));
    console.log(billNum);
    console.log(typeof(billNum));
}

peopleNumber.addEventListener('input', people)

function people (){
    peopleNum = (Number(peopleNumber.value));
    console.log(peopleNum);
    console.log(typeof(peopleNum));
    if(peopleNumber.value == "" || peopleNumber.value == 0){
        zeroValidator.classList.add('active');
        peopleNumber.classList.add('zero-people');
        tipAmountResult.innerHTML = "$0.00";
        totalResult.innerHTML = "$0.00";
    }
    else{
        zeroValidator.classList.remove('active');
        peopleNumber.classList.remove('zero-people');
    }
}

fivePercent.onclick = function(){
    tipPercentage = (parseFloat(fivePercent.innerHTML)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.add('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
    customTip.value = null;
}

tenPercent.onclick = function(){
    tipPercentage = (parseFloat(tenPercent.innerHTML)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.add('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
    customTip.value = null;
}

fifteenPercent.onclick = function(){
    tipPercentage = (parseFloat(fifteenPercent.innerHTML)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.add('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
    customTip.value = null;
}

twentyfivePercent.onclick = function(){
    tipPercentage = (parseFloat(twentyfivePercent.innerHTML)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.add('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
    customTip.value = null;
}

fiftyPercent.onclick = function(){
    tipPercentage = (parseFloat(fiftyPercent.innerHTML)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.add('active-tip-button');
    customTip.value = null;
}

customTip.addEventListener('input', customTipPercentage)

function customTipPercentage (){
    tipPercentage = (Number(customTip.value)/100);
    console.log(tipPercentage);
    console.log(typeof(tipPercentage));
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
}

peopleNumber.addEventListener('input', tipAndTotal);
billAmount.addEventListener('input', tipAndTotal);
document.addEventListener('click', tipAndTotal);
customTip.addEventListener('input', tipAndTotal);

function tipAndTotal(){

    if(billNum == null || billNum == "" || tipPercentage == null || tipPercentage == "" || peopleNum == null || peopleNum ==""){
        tipAmountResult.innerHTML = "$0.00";
        totalResult.innerHTML = "$0.00";
    }
    else{
        tipAmountResult.innerHTML = "$" + ((billNum*tipPercentage)/peopleNum).toFixed(2);
        console.log(tipAmountResult);
        totalResult.innerHTML = "$" + ((billNum+(billNum*tipPercentage))/peopleNum).toFixed(2);
        console.log(totalResult);
        resetButton.classList.add('active-reset-button');
    }
}

resetButton.addEventListener('click', resetValues);
function resetValues(){
    billAmount.value = null;
    peopleNumber.value = null;
    resetButton.classList.remove('active-reset-button');
    fivePercent.classList.remove('active-tip-button');
    tenPercent.classList.remove('active-tip-button');
    fifteenPercent.classList.remove('active-tip-button');
    twentyfivePercent.classList.remove('active-tip-button');
    fiftyPercent.classList.remove('active-tip-button');
    customTip.value = null;
    billNum = 0;
    tipPercentage = 0;
    peopleNum = 0;
}