"use strict";
class Pack {
    constructor(b, s, g) {
        this.bigCount = b;
        this.smallCount = s;
        this.goal = g;
    }
    canPack() {
        if (this.bigCount < 0 || this.smallCount < 0)
            return false;
        const bigCountTotal = this.bigCount * 5;
        if (bigCountTotal >= this.goal) {
            this.goal = this.goal % 5;
        }
        else {
            this.goal -= bigCountTotal;
        }
        if (this.goal === 0)
            return true;
        else {
            if (this.goal > this.smallCount)
                return false;
            else
                return true;
        }
    }
}
const big = document.getElementById("big");
const small = document.getElementById("small");
const goal = document.getElementById("goal");
const buttonCanPack = document.getElementById("btn");
const outputCanPack = document.getElementById("output");
buttonCanPack.addEventListener('click', () => {
    const pack = new Pack(parseInt(big.value), parseInt(small.value), parseInt(goal.value));
    outputCanPack.innerHTML = pack.canPack() ? "Can Pack" : "Cannot Pack";
});
