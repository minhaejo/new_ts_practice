

interface Developer {
    name:string
    skill:string
}


interface Person {
    name:string
    age:number
}
// //유니온은 디벨로퍼이거나 펄슨이기 때문에 둘중에 양자택일해서 써야하는거임 그리고 공통요소가 있다면 그정도까지만 허용
// function askSomeone(someone:Developer | Person) {
// //     someone.name
// //     someone.age
// //     someone.skill
// }
// askSomeone({name:"디벨로퍼",skill:"js"})
// askSomeone({name:"캡틴",age:30}) //디벨로퍼나 펄슨 인터페이스 가능



// 인터섹션 디벨로퍼나 펄슨 인터페이스를합친 타입
function askSomeone(someone:Developer & Person) {
    someone.name
    someone.age
    someone.skill
    }
    askSomeone({name:"디벨로퍼",skill:"js"}) //스킬없어서 오류
    askSomeone({name:"캡틴",age:30}) 
    
    

