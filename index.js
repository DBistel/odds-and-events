const $app = document.querySelector("#app");
const $div = document.createElement("div");
const $Output_1 =document.createElement("output");
const $Output_2 =document.createElement("output");
const $Output_3 =document.createElement("output");


const addNumberToBank = (e) => {
  e.preventDefault ();
  console.log(e);
  console.log(e.target);
  console.log(e.target[0]);
  console.log(e.target[0].value);
}

//==form==
const form = () => {
  const $form = document.createElement("form");
  $form.style.width = "40%";
  $form.style.margin = "0 auto";
  $form.innerHTML = `
    <div class="form-group">
        <label for="exampleInputEmail1">Enter number of racers</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number of racers">
    </div>
    <button class="btn btn-primary">Submit</button>
`;
  $form.addEventListener("submit", addNumberToBank);
  return $form;
};



const start = () => {
  //Step 1 attach to main div
  const $h2 = document.createElement ("h2");
const $h3_1 = document.createElement("h3");
const $h3_2 = document.createElement ("h3");
const $h3_3 = document.createElement("h3");

$h2.textContent = "Odd of Even"
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