document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    handlerProductPrice("phone", true);
  });
document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    handlerProductPrice("phone", false);
  });

document.getElementById("case-increase").addEventListener("click", function () {
  handlerProductPrice("case", true);
});
document.getElementById("case-decrease").addEventListener("click", function () {
  handlerProductPrice("case", false);
});

function handlerProductPrice(product, increase) {
  const counter = document.getElementById(product + "-counter");
  const counterToNumber = parseInt(counter.value);
  let newCount = counterToNumber;
  if (increase == true) {
    newCount = counterToNumber + 1;
  }
  if (increase == false && counterToNumber > 0) {
    newCount = counterToNumber - 1;
  }
  counter.value = newCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = newCount * 1219;
  }
  if (product == "case") {
    productTotal = newCount * 59;
  }

  document.getElementById(product + "-total").innerText = productTotal;
  totalPrice();
}
function totalPrice() {
  const phoneCounter = getInputValue("phone");
  const caseCounter = getInputValue("case");
  const totalPrice = phoneCounter * 1219 + caseCounter * 59;

  const tax = Math.round(totalPrice * 0.1);

  const grandTotal = totalPrice + tax;

  if (phoneCounter == 0 && caseCounter == 0) {
    document.getElementById("price-total").innerText = 0;
    document.getElementById("tax").innerText = 0;
    document.getElementById("grand-total").innerText = 0;
  } else {
    document.getElementById("price-total").innerText = totalPrice;
    document.getElementById("tax").innerText = tax;
    document.getElementById("grand-total").innerText = grandTotal;
  }
}
function getInputValue(product) {
  const counter = document.getElementById(product + "-counter");
  const counterToNumber = parseInt(counter.value);
  return counterToNumber;
}
