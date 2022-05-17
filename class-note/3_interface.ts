//딕셔너리 패턴

interface stringRegexDictionary {
    [key:string]:RegExp
}

var obj:stringRegexDictionary = {
    cssFile :/\.css$/,
    jsFile : /\.js$/
}
Object.keys(obj)



//인터페이스 확장

interface Person {
    name:string
    age:number
}

interface Developer extends Person {
    language:string
}

var capt:Developer ={
    language:"hi",
    age:100,
    name:"minhae"

}