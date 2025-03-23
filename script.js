const Button=document.getElementById('btn');
Button.addEventListener('click', multiplicationGenerator);

function multiplicationGenerator() {
  let num = document.getElementById("in-num").value;
  let table = document.getElementById("table");

  if (num === "" || isNaN(num) || num<=0) {
    alert("Please enter a valid number!");
    return;
  }

  num = parseInt(num);
  table.innerHTML = "";
  let caption=table.createCaption();
  caption.textContent=`Multiplication Table of ${num}`;

  for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    cell1.textContent = num+" x "+i + " = " + (num * i);
  }
};
