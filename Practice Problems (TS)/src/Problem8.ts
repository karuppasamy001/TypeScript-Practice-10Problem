class Tax{
    public grossSalary: number = 0
    public totalSaving: number = 0

    public temp_gross: string
    public temp_saving: string


    constructor(grossSalary: string, TotalSaving: string){
        this.temp_gross = grossSalary
        this.temp_saving = TotalSaving
    }

    validateInput(): boolean{

        if(isNaN(Number(this.temp_gross))) {
            alert("Please Enter the Gross Salary in Number")
            return false
        }
        else this.grossSalary = parseFloat(this.temp_gross)

        if(isNaN(Number(this.temp_saving))) {
            alert("Please Enter the Total Saving in Number")
            return false
        }
        else this.totalSaving = parseInt(this.temp_saving)

        return true
    }



    calculateTax(): string {

        if(this.validateInput()){
            let currentRate = this.totalSaving > 100000 ? this.grossSalary - 100000 : this.grossSalary - this.totalSaving
            let taxRate = 0
            if (currentRate < 100000) return `The Tax = ${taxRate}`
            if (currentRate >= 500000) taxRate += (currentRate - 500000) * 0.3
            if (currentRate >= 200000) taxRate += (currentRate - 200000) * 0.2
            if (currentRate >= 100000) taxRate += (currentRate - 100000) * 0.1
            
            return `The Tax = ${taxRate}`
        }
        else return ""
    }
}



const buttonToFindTax = document.getElementById("btn") as HTMLButtonElement
const outputForTax = document.getElementById("output") as HTMLButtonElement

buttonToFindTax.addEventListener("click", ()=>{
    const gross = document.getElementById("gross") as HTMLInputElement
    const saving = document.getElementById("saving") as HTMLInputElement

    const tax = new Tax(gross.value, saving.value)
    outputForTax.innerHTML = tax.calculateTax()
})



