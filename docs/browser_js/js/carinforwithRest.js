



function tablelist(data) {
    const carinfor_obj = data;


    let outHtml = `<table>`;
    for (let car_hashmap of carinfor_obj) {

        console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);

        outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
    }
    outHtml += `</table>`;
    let listSource = document.querySelector(`#list`);
    listSource.innerHTML = outHtml

}
// tablelist();
//add keydown Event
let keydownObject = document.querySelector("#keydownEnter");
// 키보드의 Enter를 입력하면 값을 event에 담김(keydow, click 등 명령어로 event 발생조건 설정가능)
keydownObject.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        console.log(`key down : ${event.code}`);
        fetchCarInforselectall();
    }
});



function fetchCarInforselectall() {
    let getinputObject = document.querySelector("#keydownEnter");
    let inputValue = getinputObject.value;
    let url = `http://192.168.0.46:8080/selectAll/${inputValue}`;
    let request = fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            tablelist(data);
        })
        .catch((errorMeg) => { //fetch로 받은 문자열의 문제가 생겼을때 catch 해당 에러를 받아내다.
            console.log(errorMeg);
        });
}

