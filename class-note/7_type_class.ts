class Person {
    //변수의 접근범위
    private name:string  //프라이빗 이클레스 안에서만 쓰겠다
    public age:number  // 퍼블릭  기본적으로 퍼블릭임
    readonly log:string //읽기전용

    constructor(name:string,age:number) {
        this.name= name
        this.age= age
    }
}