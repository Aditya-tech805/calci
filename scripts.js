const inputvalue = document.getElementById("user-input");

// Numbers
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputvalue.innerText === "NaN" || inputvalue.innerText === "0") {
      inputvalue.innerText = "";
    }

    inputvalue.innerText += e.target.innerText.trim();
  });
});

// Operations
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const btn = e.target.innerText;
    const currentInput = inputvalue.innerText;
    const lastChar = currentInput[currentInput.length - 1];

    if (btn === "=") {
      try {
        inputvalue.innerText = eval(currentInput);
      } catch {
        inputvalue.innerText = "NaN";
      }
    } else if (btn === "AC") {
      inputvalue.innerText = "0";
    } else if (btn === "DEL") {
      const updated = currentInput.slice(0, -1);
      inputvalue.innerText = updated.length ? updated : "0";
    } else {
      if (!isNaN(lastChar) || lastChar === ")") {
        inputvalue.innerText += btn;
      }
    }
  });
});
