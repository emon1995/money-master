let balance;
const alerts = document.getElementById("alert");
const text = document.getElementById("text");
// calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getIdByValue("income");
  const food = getIdByValue("food");
  const rent = getIdByValue("rent");
  const clothes = getIdByValue("clothes");

  if (income === "" || food === "" || rent === "" || clothes === "") {
    // alert("Please enter amount");
    text.innerText = "Please enter amount";
    alerts.style.display = "block";
  } else {
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
      // alert("Please enter number of amount");
      text.innerText = "Please enter number of amount";
      alerts.style.display = "block";
    } else {
      const total = getTotalCalculate(food, rent, clothes);
      if (income > total) {
        balance = income - total;
        // console.log("🚀 ~ file: app.js:24 ~ balance", balance);
        innerTextSet("total-expenses", total);
        innerTextSet("balance", balance);
        alerts.style.display = "none";
      } else {
        // alert("Your account balance is low");
        text.innerText = "Your account balance is low";
        alerts.style.display = "block";
      }
    }
  }
});

// save
document.getElementById("save-btn").addEventListener("click", function () {
  const save = getIdByValue("save");
  if (balance === "") {
    text.innerText = "Please enter a income balance";
    alerts.style.display = "block";
  } else {
    if (save === "") {
      // alert("Please enter a amount");
      text.innerText = "Please enter a amount";
      alerts.style.display = "block";
    } else if (isNaN(save)) {
      // alert("Please enter number of amount");
      text.innerText = "Please enter number of amount";
      alerts.style.display = "block";
    } else {
      const income = getIdByValue("income");
      //  balance = getIdByValue("balance");
      const savingAmount = parseInt(income) * (parseInt(save) / 100);

      if (balance > savingAmount) {
        const remainingBalance = balance - savingAmount;
        innerTextSet("saving-amount", savingAmount);
        innerTextSet("remaining-balance", remainingBalance);
        alerts.style.display = "none";
      } else {
        // alert("Amount is very low!!!!");
        text.innerText = "Amount is very low!!!!";
        alerts.style.display = "block";
      }
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
