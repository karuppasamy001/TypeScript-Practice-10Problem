interface BankDetails {
    SBI: number;
    IOB: number;
    IB: number;
    [key: string]: number;
}

class Bank {
    static bankDetails: BankDetails = {
        SBI: 0,
        IOB: 0,
        IB: 0,
    };

    isAmountValid(amount: string): boolean {
        if (isNaN(Number(amount))) {
            return false;
        }
        return true;
    }

    isBankValid(bankName: string): boolean {
        if (bankName === 'none') return false;
        return true;
    }

    deposit(amount: HTMLInputElement, bankName: HTMLSelectElement): string {
        if (!this.isAmountValid(amount.value)) {
            alert('Enter Amount as Number');
            return '';
        }
        let NameOfBank: string = '';
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

    viewBalance(bankName: HTMLSelectElement): string {
        let balance: number = 0;
        let NameOfBank: string = '';
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

let depositHandler: () => void;
let viewBalanceHandler: () => void;

function setupDepositListener(Banks: Bank) {
    const submit = document.getElementsByClassName('submit');
    const outputDeposit = document.getElementById('outputDeposit') as HTMLHeadingElement;

    submit[0].removeEventListener('click', depositHandler); // Remove existing listener

    depositHandler = () => {
        let amount = document.getElementById('Amount') as HTMLInputElement;
        let bank = document.getElementById('selectBankForDeposit') as HTMLSelectElement;
        outputDeposit.innerHTML = Banks.deposit(amount, bank);
    };

    submit[0].addEventListener('click', depositHandler);
}

function setupViewBalanceListener(Banks: Bank) {
    const submit = document.getElementsByClassName('submit');
    const outputViewBalance = document.getElementById('outputBalance') as HTMLHeadingElement;

    submit[1].removeEventListener('click', viewBalanceHandler); // Remove existing listener

    viewBalanceHandler = () => {
        let bank = document.getElementById('selectBankToViewBalance') as HTMLSelectElement;
        outputViewBalance.innerHTML = Banks.viewBalance(bank);
    };

    submit[1].addEventListener('click', viewBalanceHandler);
}

function Action(id: string, Banks: Bank): void {
    if (id === 'DepositDiv') {
        setupDepositListener(Banks);
    } else {
        setupViewBalanceListener(Banks);
    }
}

const btn: { [index: string]: string } = {
    Deposit: 'DepositDiv',
    ViewBalance: 'ViewBalanceDiv',
};

const div = document.getElementsByTagName('div');
const mainButtons = document.getElementsByClassName('btn');

const Banks = new Bank(); 

for (let i of mainButtons) {
    i.addEventListener('click', () => {
        const mainButtonId: string = i.id;
        const DisplayDiv = document.getElementById(btn[mainButtonId]) as HTMLDivElement;

        for (let j of div) {
            if (j.id == DisplayDiv.id) {
                j.style.display = 'block';
                Action(j.id, Banks);
            } else j.style.display = 'none';
        }
    });
}


