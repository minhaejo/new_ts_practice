//타입추론 기본 1
var a ="abc"
function getB(b=10) {
    var c = "Hi"
    return b + c
}
//타입추론 기본 2

// interface Dropdown <T> {
//     value :T
//     title:string
// }
// var shoppingItem : Dropdown<string> = {
//     value : "abc" ,
//     title : "hello"
// }

//타입추론 기본 3 
interface Dropdown <T> {
    value :T
    title:string
}
interface DetailDropdown<K> extends Dropdown<K> {
    description: string
    tag : K
    //DetailDropdown 제네릭 k 를 가짐 밑에서 실행할때 스트링으로 했으니 이 값이 들어감
    //extends를 통해 Dropdown 인터페이스 붙임 암묵적으로
    //value :T
    //title:string  이런 상태가 됨
    //드롭다운에서도 T제네릭을 가지기 때문에 DetailDropdown의 제네릭을 연동시키기 위해 K값을 줌 
    
}

var detailedItem :DetailDropdown<string> = {
    title : "abbb",
    description : "ab",
    value:"a",
    tag:"a"
}

//Best Common Type
var arr = [1,2,true,true,"a"]

