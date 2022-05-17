// 타입 단언    
//내가 정한 타입으로 간주해라 
//하는것이 타입 단언 as 사용

var a;
a=20
a="a"
var b = a as string

//DOM API 조작
var div =document.querySelector("div")
if (div) {
    div.innerText
}
