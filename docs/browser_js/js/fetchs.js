// 결과값을 fetch를 통해서 들어온 문자열을 response로 받아서 resposne.json 변화 시켜서 data로 return을 받는다.
//fetch가 어싱크로 신호에 대한 즉시 답변이 아닌 답문이 완성되었을 때 return 한다.
// 정보 데이터 포털 
function fetchDatagokr() {
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=6coIXzbt%2BUyCLWaOOeFagVBVv8gvGl1JxmsKOd4H9vp%2BWyqA5T%2BG15Y4W2o4xeSxmYMAEo7ve48tBIlLlrFGdg%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((errorMeg) => { //fetch로 받은 문자열의 문제가 생겼을때 catch 해당 에러를 받아내다.
            console.log(errorMeg);
        });
}

// 자동차 정보 상세 -- 체인메스형식
function fetchCarInforDetail() {
    let url = 'http://192.168.0.46:8080/selectDetail/CI002';
    let request = fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((errorMeg) => { //fetch로 받은 문자열의 문제가 생겼을때 catch 해당 에러를 받아내다.
            console.log(errorMeg);
        });
}

// 자동차 정보 수정
function fetchCarInforupdate() {
    // 192.168.0.46:8080/update
    // body 입력값
    // {
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR_02"  
    // }
    // headers - 설정
    // Content-Type application/json
    let url = 'http://192.168.0.46:8080/update';
    let option = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        //해당 유형을 스트링으로 cast 해주는 것.
        body : JSON.stringify({ 
            "CAR_NAME": "갤로퍼",
            "CAR_INFOR_ID": "CI002"
        })
    }
    let request = fetch(url, option)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((errorMeg) => { //fetch로 받은 문자열의 문제가 생겼을때 catch 해당 에러를 받아내다.
            console.log(errorMeg);
        });
}


