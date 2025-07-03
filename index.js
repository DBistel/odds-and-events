const $app = document.querySelector("#app");
const $div = document.createElement("div");
const $Output_1 = document.createElement("p");
const $Output_2 = document.createElement("p");
const $Output_3 = document.createElement("p");
const bankArray = [];
const odds = [];
const evens =[];

const addNumberToBank = (e) => {
  e.preventDefault ();
  console.log(e);
  console.log(e.target);
  console.log(e.target[0]);
  console.log(e.target[0].value);
  const input = e.target.querySelector("#bankInput");
  const num = Number(input.value);

  if(!isNaN(num)){
    bankArray.push(num);
    $Output_1.textContent = bankArray.join(", ");
    input.value = "";
  }else{
    alert("Please enter a valid number.");
  }
  $Output_1.value = bankArray;
}

//==form==
const form = () => {
  const $form = document.createElement("form");
  $form.style.width = "50%";
  $form.style.margin = "0 auto";
  
  $form.innerHTML = `
  <div class="form-group">
    <label for="bankInput">Add numbers to bank</label>
    <input type="number" class="form-control" id="bankInput" placeholder="Enter a number">
    <button id="add-btn" type="submit" class="btn btn-primary">Add number</button>
    <button id="sort-one-btn" type="button" class="btn btn-primary">Sort 1</button>
    <button id="sort-all-btn" type="button" class="btn btn-primary">Sort All</button>
  </div>
`;
  $form.addEventListener("submit", addNumberToBank);
  $form.querySelector("#sort-one-btn").addEventListener("click", () => {
  const num = bankArray.shift();
  if (num % 2 === 0) {
    evens.push(num);
    $Output_3.textContent = evens.join(", ");
  } else {
    odds.push(num);
    $Output_2.textContent = odds.join(", ");
  }
  $Output_1.textContent = bankArray.join(", ");
});

$form.querySelector("#sort-all-btn").addEventListener("click", () => {
  while (bankArray.length > 0) {
    const num = bankArray.shift();
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  $Output_1.textContent = "";
  $Output_2.textContent = odds.join(", ");
  $Output_3.textContent = evens.join(", ");
});

  return $form;
};



const start = () => {
  //Step 1 attach to main div
  const $h2 = document.createElement ("h2");
const $h3_1 = document.createElement("h3");
const $h3_2 = document.createElement ("h3");
const $h3_3 = document.createElement("h3");

$h2.textContent = "Odd or Even"
$h3_1.textContent = "bank"
$h3_2.textContent = "odd numbers"
$h3_3.textContent = "even numbers"
$app.append($h2);
$app.append(form());
$app.append($h3_1);
$app.append($Output_1);
$app.append($h3_2);
$app.append($Output_2);
$app.append($h3_3);
$app.append($Output_3);


};

start();