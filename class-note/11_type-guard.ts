interface Developer {
    name:string
    skill:string
}
interface Person {
    name:string
    age:number
}

function introduce() :Developer | Person {
    return {name:"tony",age:33,skill:"Iron making"}
    //리턴에 분명 이 세가지 프로퍼티를 가진 객체를 반환함 하지만 쓸 수 없다? 유니온이 더 큰 개념이라고 봐도 무방할듯
}
var tony =introduce()
console.log(tony.name)
//유니온에서 | & 차이
// |는 모두 다 쓸수 있음 + 각각의 개별만 뽑아서 가능  하지만 어떤 변수에 이 데이터를 넘길땐 유니온이면 공통된것만 사용가능 
//즉 위 코드에선 name뿐만이 공통이기 때문에 name만가능
// &는 세가지 다써야함

//스킬을 쓰고싶다면 ? &를 쓰던지
//as를 통한 단언
if ((tony as Developer).skill) {
    (tony as Developer).skill
    console.log((tony as Developer).skill)
}else if((tony as Person ).age){
    (tony as Person ).age
    console.log( (tony as Person ).age)
}

//타입가드  is는 비교할 애의 속성 비교를 통한느낌
function isDeveloper(target:Developer | Person) :target is Developer{
    return(target as Developer).skill !== undefined
}


if (isDeveloper(tony)) {
    tony.skill
}
    else{tony.age
    }
    
    
