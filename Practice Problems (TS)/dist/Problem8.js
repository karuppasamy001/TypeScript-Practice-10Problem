"use strict";
class Tax {
    constructor(grossSalary, TotalSaving) {
        this.grossSalary = 0;
        this.totalSaving = 0;
        this.temp_gross = grossSalary;
        this.temp_saving = TotalSaving;
    }
    validateInput() {
        if (isNaN(Number(this.temp_gross))) {
            alert("Please Enter the Gross Salary in Number");
            return false;
        }
        else
            this.grossSalary = parseFloat(this.temp_gross);
        if (isNaN(Number(this.temp_saving))) {
            alert("Please Enter the Total Saving in Number");
            return false;
        }
        else
            this.totalSaving = parseInt(this.temp_saving);
        return true;
    }
    calculateTax() {
        if (this.validateInput()) {
            let currentRate = this.totalSaving > 100000 ? this.grossSalary - 100000 : this.grossSalary - this.totalSaving;
            let taxRate = 0;
            if (currentRate < 100000)
                return `The Tax = ${taxRate}`;
            if (currentRate >= 500000)
                taxRate += (currentRate - 500000) * 0.3;
            if (currentRate >= 200000)
                taxRate += (currentRate - 200000) * 0.2;
            if (currentRate >= 100000)
                taxRate += (currentRate - 100000) * 0.1;
            return `The Tax = ${taxRate}`;
        }
        else
            return "";
    }
}
const buttonToFindTax = document.getElementById("btn");
const outputForTax = document.getElementById("output");
buttonToFindTax.addEventListener("click", () => {
    const gross = document.getElementById("gross");
    const saving = document.getElementById("saving");
    const tax = new Tax(gross.value, saving.value);
    outputForTax.innerHTML = tax.calculateTax();
});
