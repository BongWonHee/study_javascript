// if(){        
// }else if(){
// }else{    
// }

let first = 1;
let second = 4;

if (first < 10) {
    console.log("Mano")
} else if (first > second) {
    console.log(`$(first) > $(second)`);
} else {
    console.log(`second : $(second)`);
}
// == -> 값만 비교한다. vs === -> 데이터 타입까지 비교한다.

let third = `4`;
first = 4;

// third == first
// true
// third === first
// false

// 삼항연산자(if문)
// 변수 = () ? true 조건결과: false 조건결과;
let result = (third === first) ?`true!`:`false!` ;