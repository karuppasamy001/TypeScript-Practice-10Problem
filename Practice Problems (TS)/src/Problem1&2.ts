// this program contains the functions to find the largest product of adjacent elements and to find the longest ascending order sequence


class MergedProgram {
    public array: number[] = []

    constructor(HTMLarray: HTMLInputElement){
        let arrayValues = HTMLarray.value
        console.log(arrayValues)
        let duplicateArray: string[] = HTMLarray.value.trim().split(" ")
        console.log(duplicateArray)

        for(let i of duplicateArray){
            if(isNaN(Number(i))) alert("The input should contain only String")
            else this.array.push(parseInt(i))
        }

    }


    findLargestProduct(): string{

        // If the length is less than 2, return an message because you need at least two numbers to multiply
        if(this.array.length < 2){
            return "Input Values must be at-least 2"
        }        

        let currentProduct: number = 0
        let largestProduct: number = 0

        let output: string = ""
        
        for(let i = 0 ; i < this.array.length - 1; i++){
            currentProduct = this.array[i] * this.array[i + 1]
            if (currentProduct > largestProduct) {
                largestProduct = currentProduct
                output =  `The 2 Adjacent Values are ${this.array[i]} and ${this.array[i+1]} and their Product is ${largestProduct}`
            }
        }

        return output

    }


    findLongestAscending(): string{
        let currentLongestAscending: number = 0
        let longestAscending: number = 0

        let sequence: number[] = []

        for(let i = 0; i < this.array.length - 1; i++){
            let j: number = i
            currentLongestAscending = 1
            while(j != this.array.length && this.array[j] < this.array[j + 1]){
                j++
                currentLongestAscending++
            }

            if(currentLongestAscending > longestAscending){
                longestAscending = currentLongestAscending
                sequence = [...this.array.slice(i , i+longestAscending)]
            }
        }

        return `The Longest Ascending Length is ${longestAscending} and their Sequence is ${sequence}`
    }

}



const button = document.getElementsByTagName("button")
const arrayValues = document.getElementById("ArrayValues") as HTMLHeadingElement
const output = document.getElementById("output") as HTMLHeadingElement




for(let i of button){
    i.addEventListener("click", ()=>{
        const inputValues = document.getElementById("array") as HTMLInputElement
        const Problem_1_and_2 = new MergedProgram(inputValues)
        arrayValues.innerHTML = `The Values are : ${Problem_1_and_2.array}`


        if(i.id === "product") output.innerHTML = Problem_1_and_2.findLargestProduct()
        else output.innerHTML = output.innerHTML = Problem_1_and_2.findLongestAscending()
    })
}



