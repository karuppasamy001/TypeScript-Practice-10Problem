"use strict";
class Bank {
    isAmountValid(amount) {
        if (isNaN(Number(amount))) {
            return false;
        }
        return true;
    }
    isBankValid(bankName) {
        if (bankName === 'none')
            return false;
        return true;
    }
    deposit(amount, bankName) {
        if (!this.isAmountValid(amount.value)) {
            alert('Enter Amount as Number');
            return '';
        }
        let NameOfBank = '';
        switch (bankName.value) {
            case 'SBI':
                Bank.bankDetails.SBI += Number(amount.value);
                NameOfBank = 'State Bank of India';
                break;
            case 'IOB':
                Bank.bankDetails.IOB += Number(amount.value);
                NameOfBank = 'Indian Overseas Bank';
                break;
            case 'IB':
                Bank.bankDetails.IB += Number(amount.value);
                NameOfBank = 'Indian Bank';
                break;
            default:
                alert('Please Enter Bank Name');
                return '';
        }
        console.log(Bank.bankDetails);
        return `The ${amount.value} is Deposited into ${NameOfBank} Successfully`;
    }
    viewBalance(bankName) {
        let balance = 0;
        let NameOfBank = '';
        switch (bankName.value) {
            case 'SBI':
                balance = Bank.bankDetails.SBI;
                NameOfBank = 'State Bank of India';
                break;
            case 'IOB':
                balance = Bank.bankDetails.IOB;
                NameOfBank = 'Indian Overseas Bank';
                break;
            case 'IB':
                balance = Bank.bankDetails.IB;
                NameOfBank = 'Indian Bank';
                break;
            default:
                alert('Please Enter Bank Name');
                return '';
        }
        return `The ${NameOfBank} Available Balance is Rs.${balance}`;
    }
}
Bank.bankDetails = {
    SBI: 0,
    IOB: 0,
    IB: 0,
};
let depositHandler;
let viewBalanceHandler;
function setupDepositListener(Banks) {
    const submit = document.getElementsByClassName('submit');
    const outputDeposit = document.getElementById('outputDeposit');
    submit[0].removeEventListener('click', depositHandler); // Remove existing listener
    depositHandler = () => {
        let amount = document.getElementById('Amount');
        let bank = document.getElementById('selectBankForDeposit');
        outputDeposit.innerHTML = Banks.deposit(amount, bank);
    };
    submit[0].addEventListener('click', depositHandler);
}
function setupViewBalanceListener(Banks) {
    const submit = document.getElementsByClassName('submit');
    const outputViewBalance = document.getElementById('outputBalance');
    submit[1].removeEventListener('click', viewBalanceHandler); // Remove existing listener
    viewBalanceHandler = () => {
        let bank = document.getElementById('selectBankToViewBalance');
        outputViewBalance.innerHTML = Banks.viewBalance(bank);
    };
    submit[1].addEventListener('click', viewBalanceHandler);
}
function Action(id, Banks) {
    if (id === 'DepositDiv') {
        setupDepositListener(Banks);
    }
    else {
        setupViewBalanceListener(Banks);
    }
}
const btn = {
    Deposit: 'DepositDiv',
    ViewBalance: 'ViewBalanceDiv',
};
const div = document.getElementsByTagName('div');
const mainButtons = document.getElementsByClassName('btn');
const Banks = new Bank();
for (let i of mainButtons) {
    i.addEventListener('click', () => {
        const mainButtonId = i.id;
        const DisplayDiv = document.getElementById(btn[mainButtonId]);
        for (let j of div) {
            if (j.id == DisplayDiv.id) {
                j.style.display = 'block';
                Action(j.id, Banks);
            }
            else
                j.style.display = 'none';
        }
    });
}
