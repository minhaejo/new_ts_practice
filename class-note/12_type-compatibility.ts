//인터페이스
interface Developer {
name:string,
skill:string
}
// interface Person {
//     name:string
// }
class Person{
    name:string
    
}
var developer :Developer
var person : Person
// developer = person //오른쪽에 있는놈이 더 많은 속성을 가져야 호환이 된다고 보면됨
person = developer

//함수에선 오른쪽에 있는 놈이 더 많은 속성을 가지면 왼쪽은 그릇이 작기때문에 호환안됨

var add =function (a:number) {
    
}
var sum = function (a:number,b:number) {

}

sum = add
add = sum 

//비어있기때문에 제네릭이 동일한거라고 간주함
interface Empty <T> {

}
var empty1 :Empty<string>
var empty2 :Empty<string>

empty1 = empty2 
empty2 = empty1 


interface NotEmpty <T> {
    date:T
}

var NotEmpty1:NotEmpty<string>
var NotEmpty2:NotEmpty<number>

NotEmpty1=NotEmpty2
NotEmpty2=NotEmpty1