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

//인터페이스에 제네릭 설정하는 방법 
// interface Dropdown {
//     value:string,
//     selected:boolean
// }
// const obj:Dropdown = {
// value:"abc" , selected:false
// }
interface Dropdown<T>{
 value :T
 selected:boolean
}
const obj :Dropdown<string> ={
    value:"abc",
    selected:true
}
