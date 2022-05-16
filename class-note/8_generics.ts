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

//제네릭의 타입제한
// 함수안에 넣을 인자를 타입을 그때 전해주겠다
//또한 배열로 받을거야 하면 인자로 받은 애를 배열 메서드 돌릴수도있음
function logTextLength<T>(text:T[]):T[] {
    console.log(text.length)
    text.forEach((text)=>{
        console.log(text)
    })
    return text
}
logTextLength<string>(["hi","hello"])
