// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`);

// for (let i = 0; i < animals.length; i = i + 1) {
//     console.log(`${i}: ${animals[i]}`);
// }

// for (let animal of animals) { //foreach문 for(String animal : animals) 와 동일
//     console.log(`${animal}`);
// }

// learning after object
const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
let outHtml ='';
for (let animal_hashmap of animals_obj ) {
    console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap['species']}`);
    outHtml = `${outHtml}<div>name : ${animal_hashmap.name}, species : ${animal_hashmap['species']}</div>`;
}
console.log(outHtml);

//brower 자원 중에 docs사용
// <div id="loops">inner text</div> id의 값을 따라 outHtml에 담긴 값을 출력하는법.
let loops_source = document.querySelector(`#loops`); 

loops_source.innerHTML = outHtml