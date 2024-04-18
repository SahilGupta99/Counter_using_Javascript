const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countDisplay = document.getElementById("count");

let count = 0;

decrementButton.addEventListener("click", () => {
 if(count>0)
 {
    count--;
 }
  updateCountDisplay();
});

incrementButton.addEventListener("click", () => {
  count++;
  updateCountDisplay();
});

function updateCountDisplay() {
  countDisplay.textContent = count;
}
