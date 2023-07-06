
// function 제작 양식 1
function calculateSumFirst(first,second){ 
    return first + second;
}

//function 제작 양식 2  1회성으로 사용할때 사용함.
//이양식은 성격이 function 이되므로 ;으로 마무리 하자.
// let third = calculateSumeFirst(4,6);

let calculateMinusSecond = (first, second) => { 
    return first - second;                    
};

// calculateMinusSecond(2,1)
// 1

// callback function 내가 호출한 function이 설정한 다른 function을 호출한다.
function calculateForth(funcName, param1, param2){
    let result = funcName(param1,param2);
    result = result + 10 ;
    return result ;
}

// calculateForth(calculateSumFirst, 5,2)
// 17
// calculateForth(calculateSumFirst, 5)
// NaN 해당function은 호출이 되지만 연산은 안됨.
// calculateForth(calculateMinusSecond, 5,2)
// 13
