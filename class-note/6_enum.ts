enum Shoes {
    Nike = "나이키" ,
    Adidas = "아디다스"
    }
    var myShoes = Shoes.Nike;
    console.log(myShoes)
    
     enum Answer {
        Yes = "Y",
        No = "N"
     }
    //드롭다운 형식에서 쓰면 좋음
     function askQuestion(answer:Answer) {
         if (answer === Answer.Yes) {
             console.log("정답입니다.")
         }
         if (answer === Answer.No) {
            console.log("오답입니다.")
         }
     }
     askQuestion(Answer.Yes)