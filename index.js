const $app = document.querySelector("#app");
const $div = document.createElement("div");




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