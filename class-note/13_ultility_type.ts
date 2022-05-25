interface Product {
    id :number
    name:string
    price:number
    brand:string
    stock:number
}
//1.상품목록을 받아오기위한 API함수
function fetchProduct():promise<Product[]> {

    
}
interface ProductDetail {
    id:number
    name:string
    price:number
}
type ShoppingItem = Pick<Product,"id"|"name"|"price">

//PARTIAL
//type = MayHaveProduct partial<product>특정타입이 포함하거나 그냥 없어도 만족 유틸성 좋음
// const me : MayHaveProduct = {} 가능

//PICK
//Product 인터페이스에서 id, name ,price 를 픽으로 뽑아서 만든 애가 shoppingItem이다.
//이거 왜씀? >> 인터넷 쇼핑몰같은 경우 상세정보같은걸 제공할때 저 인터페이스 사용하기 힘듦 그래서 픽으로 뽑은 
//애를 사용해서 쓸수있는거임 
//2.특정상품의 상세 정보를 나타내기 위한 함수
function displayProductDetail(shoppingItem:Pick<Product,"id"|"name"|"price">) {
    
}
//OMIT Omit<사용할 인터페이스,"그인터페이스에서 뺄요소"> 픽과다르게 뺄요소를 적고 타입을 먹이는거임

// interface UpdateProduct {
//     id?:number
//     name?:string
//     price?:number
//     brand?:string
//     stock?:number
// }

type UpdateProduct = Partial<Product>
//3.특정 상품을 갱신하는 함수
function updateProductItem(productItem: Partial<Product>) {
    
}

//4.유틸리피 타입 구현하기 -Partial
interface UserProfile{
    username:string
    email:string
    profilePhotoUrl:string
}

// interface UserProfileUpdate {
//     username?:string
//     email?:string
//     profilePhotoUrl?:string
// }
//#1
// type UserProfileUpdate = {
//     username:UserProfile["username"]
//     email:UserProfile["email"]
//     profilePhotoUrl:UserProfile["profilePhotoUrl"]
// }

//#2
// type UserProfileUpdate = {
//     [p in "username" | "email" |"profilePhotoUrl"]?:UserProfile[p]
// }

// type UserProfileKeys = keyof UserProfile

//#3
type UserProfileUpdate = {
    [p in keyof UserProfile]?:UserProfile[p]
}

//#4
type Subset<T> = {
    [p in keyof T]?:T[p]
}
