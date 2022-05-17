// interface Person {
//     name:string
//     age:number
// }

//타입은 확장이 안됨 extends 사용 x 
type Person = {
    name:string
    age:number
}

var seho :Person = {
    name:"세호",
    age:30
}

type MyString =string;
var str :MyString ="hello"

type ToDo = {id:string,title:string,done:boolean}
function getToDo(todo:Todo) {

}