let billAmountInputEl = document.getElementById("billAmount");
let percentageTipInputEl = document.getElementById("percentageTip");
let tipAmountInputEl = document.getElementById("tipAmount");
let calculateTotalEl = document.getElementById("calculateTotal");
let errorMessageEl = document.getElementById("errorMessage");
let errorMessage = "please enter a valid input.";


function calculateValue(){
    let billAmountInputValue = parseInt(billAmountInputEl.value);
    let percentageTipInputValue = parseInt(percentageTipInputEl.value);
    if (billAmountInputValue === " ") {
        errorMessageEl.textContent = errorMessage;
    } else if (percentageTipInputValue === " ") {
        errorMessageEl.textContent = errorMessage;
    } else {
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let calculateTip = (percentageTip / 100) * billAmount;
        let totalCalculate = billAmount + calculateTip;
        tipAmountInputEl.value = calculateTip;
        calculateTotalEl.value = totalCalculate;
        
    }
    
}
