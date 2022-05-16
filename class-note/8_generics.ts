// function logText(text) {
//     console.log(text)
//     return text
// }
// logText("hi")
// logText(10)
// logText(true)

//호출하는 시점에 타입을 줄수있음
// function logText<T>(text:T):T {
//     console.log(text)
//     return text
// }
// logText<string>("하이")

function logText<T>(text:T):T {
    console.log(text)
    return text
}

// function logNumber(num:number) {
//     console.log(num)
//     return num
    
// }

// logText("HI")
// logText(10)
// logText(true)



const str = logText<string>("a")
str.split("")
const logIn = logText<boolean>(true)

