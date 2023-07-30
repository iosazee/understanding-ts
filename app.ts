function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1 + num2
    if(showResult){
        console.log(phrase + result)
    } else {
        return result
    }
}

const n1 = 5
const n2 = 4
const printResult = true
const resultPhrase = 'Reesult is: '

const result = add(n1, n2, printResult, resultPhrase)
