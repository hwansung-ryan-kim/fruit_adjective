// script.js
const fruits = ["사과", "바나나", "오렌지", "딸기", "포도"];
const adjectives = ["맛있다", "맛없다", "상큼하다", "달콤하다", "시다"];

const fruitBtn = document.getElementById("fruitBtn");
const adjectiveBtn = document.getElementById("adjectiveBtn");
const resultDiv = document.getElementById("result");

let selectedFruit = "";
let selectedAdjective = "";

fruitBtn.addEventListener("click", () => {
    selectedFruit = fruits[Math.floor(Math.random() * fruits.length)];
    updateResult();
});

adjectiveBtn.addEventListener("click", () => {
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    updateResult();
});

function updateResult() {
    if (selectedFruit && selectedAdjective) {
        resultDiv.textContent = `${selectedFruit}가 ${selectedAdjective}`;
    }
}
