//타입추론

// function fetchItems():string[] {
//     let items = ["a","b","c"]
//     return items
//   }
//   let result =  fetchItems()
//   console.log(result)

//프로미스는 기본적으로 제네릭을 이용함 제네릭 타입을 넣고 제네릭을 돌려받는거 
//리턴문 자체가 프로미스 구문 근데 리솔브함수를 호출하면 items를 반환함
//아이템즈는 문자열 배열로 구성 그렇기때문에 프로미스 뒤에 제네릭 타입을 해줘야함 
//넘버치면 당연히 숫자배열 아니니까 오류
function fetchItems():Promise<string[]>{
    var items = ["a","b","c"];
    return new Promise(function(resolve){
        resolve(items);
    })  ;
}
