//함수인자 인터페이스 활용
interface User {
    age:number
    name:string
}

var seho :User = {
    age:33,
    name:"세호"
}
function getUser(user:User) {
    console.log(user)
}
const capt = {
    name:"캡틴",
    age:30
}
getUser(capt)



//함수의 스펙에 인터페이스 활용
interface SumFunction {
(a:number,b:number):number
}
var sum :SumFunction
sum = function (a:number ,b:number) {
    return a+b
}



//인덱싱

interface StringArray {
    [index:number]:string
}
var arr :StringArray =["a","b","c"]
arr[0] = 10



//딕셔너리 패턴

interface stringRegexDictionary {
    [key:string]:RegExp
}

var obj:stringRegexDictionary = {
    cssFile :/\.css$/,
    jsFile : /\.js$/
}
obj["cssFile"] = "a"
Object.keys(obj).forEach((value)=>{


})



//인터페이스 확장

interface Person {
    name:string
    age:number
}

interface Developer extends Person {
    language:string
}

// var capt:Developer ={
//     language:"hi",
//     age:100,
//     name:"minhae"

// }