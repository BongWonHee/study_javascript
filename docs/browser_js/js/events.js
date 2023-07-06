
let keydownObject = document.querySelector("#keydownEnter");
// 키보드를 입력하는 값을 event에 담김
keydownObject.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        console.log(`key down : ${event.code}`);
    }
});