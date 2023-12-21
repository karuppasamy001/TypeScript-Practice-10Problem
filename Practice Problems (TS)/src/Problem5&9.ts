
// This program contains the functions to find the palindromic substring and most occur characters in the word



interface Occurrence {
    [key: string]: number
}

class MergedProgram2 {
    public givenString: string

    constructor(inputValues: HTMLInputElement){
        this.givenString = inputValues.value.trim()
    }

    removeSpacesInString(str: string): string{
        return str.replace(/ /gi, '')
    }


    findOccurrence(): string{

        let strArr = this.removeSpacesInString(this.givenString).toLowerCase()
        if (strArr === ""){
            alert("Value Must Contain Character")
            return ""
        }
        let occurrence: Occurrence = {}

        for(let i of strArr){
            if(!occurrence[i]){
                occurrence[i] = 0
            }
            
            occurrence[i]+=1
        }

        return JSON.stringify(occurrence)
    }

    checkIfPalindrome(str: string): boolean{
        return str == str.split('').reverse().join('')
    }

    findPalindromicSubstring(): string{
        let stringToArray: string[] = this.givenString.split(" ")
        let output: string = ""
        
        for(let i = 0; i < stringToArray.length; i++){

            if(i != 0) output += " "

            if(this.checkIfPalindrome(stringToArray[i])){
                output += '*'.repeat(stringToArray[i].length)
            }
            else output += stringToArray[i]
        }
        return output

    }
}



const Button = document.getElementsByTagName("button")
const StringValues = document.getElementById("StringValues") as HTMLHeadingElement
const Output = document.getElementById("output") as HTMLHeadingElement




for(let i of Button){
    i.addEventListener("click", ()=>{

        output.innerHTML = ""

        const inputValues = document.getElementById("strings") as HTMLInputElement
        const Problem_5_and_9 = new MergedProgram2(inputValues)
        StringValues.innerHTML = `The Values are : ${Problem_5_and_9.givenString}`


        if(i.id === "Occurrence") {
            let occurrence = JSON.parse(Problem_5_and_9.findOccurrence())
            console.log(occurrence)

            let maximumValue: number = 0
            let mostOccurCharacter: string = ""

            for (let entry in occurrence) {
                output.innerHTML += `The Letter (${entry}) Occurs : ${occurrence[entry]} Times <br>`;
                if(occurrence[entry] >= maximumValue) {
                    mostOccurCharacter = maximumValue === occurrence[entry] ? mostOccurCharacter + `, ${entry}` : entry
                    maximumValue = occurrence[entry]
                }
            }

            output.innerHTML += `<br> The Maximum Occurrence Character are ${mostOccurCharacter}`
        }

        else output.innerHTML = `After replaced the Palindromic string with ' * ' :  ${Problem_5_and_9.findPalindromicSubstring()}`
    })
}