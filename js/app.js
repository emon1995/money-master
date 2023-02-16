let balance;
// calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getIdByValue("income");
  const food = getIdByValue("food");
  const rent = getIdByValue("rent");
  const clothes = getIdByValue("clothes");

  if (income === "" || food === "" || rent === "" || clothes === "") {
    alert("Please enter amount");
  } else {
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
      alert("Please enter number of amount");
    } else {
      const total = getTotalCalculate(food, rent, clothes);
      if (income > total) {
        balance = income - total;
        innerTextSet("total-expenses", total);
        innerTextSet("balance", balance);
      } else {
        alert("Your account balance is low");
      }
    }
  }
});

// save
document.getElementById("save-btn").addEventListener("click", function () {
  const save = getIdByValue("save");
  if (save === "") {
    alert("Please enter a amount");
  } else if (isNaN(save)) {
    alert("Please enter number of amount");
  } else {
    const income = getIdByValue("income");
    //  balance = getIdByValue("balance");
    const savingAmount = parseInt(income) * (parseInt(save) / 100);

    if (balance > savingAmount) {
      const remainingBalance = balance - savingAmount;
      innerTextSet("saving-amount", savingAmount);
      innerTextSet("remaining-balance", remainingBalance);
    } else {
      alert("Amount is very low!!!!");
    }
  }
});

function innerTextSet(id, value) {
  document.getElementById(id).innerText = value;
}

function getTotalCalculate(food, rent, clothes) {
  const totalValue = parseInt(food) + parseInt(rent) + parseInt(clothes);
  return totalValue;
}

function getIdByValue(id) {
  const value = document.getElementById(id).value;
  return value;
}
