const btn1 = document.querySelector(".btn.create");
const ul = document.querySelector(".data");
const btn2 = document.querySelector(".btn.add");
const ull = document.querySelector(".ull");
let ine = document.querySelector(".input2");
btn1.addEventListener("click", function () {
  let input = document.querySelector(".input").value;
  if (input == "") {
    alert("Please enter the value");
  } else {
    let li = document.createElement("li");
    li.innerText = input;
    // var arr = [];
    // arr.push(input);
    console.log(li);
    ul.appendChild(li);
    document.querySelector(".input").value = "";
  }
});
let c = 0;
let p = 3;
const input = document.querySelectorAll(".form-check-input");
console.log(input);2
for (let i = 0; i < input.length; i++) {
  let label = input[i].nextElementSibling;
  input[i].addEventListener("change", function () {
    label.classList.toggle("active");
    if (input[i].checked) {
      c++;
      document.querySelector("p").innerText = c + " task completed";
    } else {
      c--;
      document.querySelector("p").innerText = c + " task completed";
    }
  });
}

btn2.addEventListener("click", function () {
  let input = document.querySelector(".input2").value;
  if (input == "") {
    alert("Please enter the value");
  } else {
    let li = document.createElement("div");
    li.classList.add("task");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.classList.add("form-check-input");
    inp.id = "flexCheckDefault task" + p;
    inp.name = "checkbox";
    inp.addEventListener("change", function () {
      label.classList.toggle("active");
      if (inp.checked) {
        c++;
        document.querySelector("p").innerText = c + " task completed";
      } else {
        c--;
        document.querySelector("p").innerText = c + " task completed";
      }
    });
    li.appendChild(inp);
    let label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", "flexCheckDefault task" + p);
    label.innerText = input;
    li.appendChild(label);
    ull.appendChild(li);
    document.querySelector(".input2").value = "";
  }
});

ine.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btn2.click();
  }
});