class Pack {
    public bigCount: number
    public smallCount: number
    public goal: number


    constructor(b: number, s: number, g: number){
        this.bigCount = b;
        this.smallCount = s;
        this.goal = g;
    }

    canPack(): boolean{

        if(this.bigCount < 0 || this.smallCount < 0) return false


        const bigCountTotal = this.bigCount * 5

        if(bigCountTotal >= this.goal){
            this.goal = this.goal % 5
        }
        else{
            this.goal -= bigCountTotal
        }

        if(this.goal === 0) return true
        else{
            if(this.goal > this.smallCount) return false
            else return true
        }
    }
}


const big = document.getElementById("big") as HTMLInputElement
const small = document.getElementById("small") as HTMLInputElement
const goal = document.getElementById("goal") as HTMLInputElement

const buttonCanPack = document.getElementById("btn") as HTMLButtonElement
const outputCanPack = document.getElementById("output") as HTMLHeadingElement



buttonCanPack.addEventListener('click', () => {
    const pack = new Pack(parseInt(big.value), parseInt(small.value),parseInt(goal.value))
    outputCanPack.innerHTML = pack.canPack() ? "Can Pack" : "Cannot Pack"
})
