function calculation() {
  const expression = document.getElementById("value").value;
  let result;
  if (expression.includes("+")) {
    const [num1, num2] = expression.split("+").map(Number);
    result = num1 + num2;
  } else if (expression.includes("-")) {
    const [num1, num2] = expression.split("-").map(Number);
    result = num1 - num2;
  } else if (expression.includes("*")) {
    const [num1, num2] = expression.split("*").map(Number);
    result = num1 * num2;
  } else if (expression.includes("/")) {
    const [num1, num2] = expression.split("/").map(Number);
    result = num1 / num2;
  } else {
    result = "Invalid Expression";
  }
  document.getElementById("result").textContent = `Result : ${result}`;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", calculation);
