type Heroes = "Hulk" | "Capt" | "Thor"
type HeroAges = {[K in Heroes]:number}
const ages:HeroAges = {
    Hulk:33,
    Capt:30,
    Thor:50
}

//for in 반복문 코드
