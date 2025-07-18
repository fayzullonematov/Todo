const button = document.querySelector("button");
const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todo-list");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const text = input.value;
  const task = document.createElement("li");
  const deltbtn = document.createElement("button");
  const done = document.createElement("button");

  if (text === "") {
    return;
  }

  const span = document.createElement("span");
  span.textContent = text;

  deltbtn.textContent = "❌";
  deltbtn.addEventListener("click", function () {
    task.remove();
  });

  done.textContent = "✅";
  done.addEventListener("click", function () {
    span.classList.toggle("lista");
  });

  task.appendChild(span);
  task.appendChild(deltbtn);
  task.appendChild(done);
  ul.appendChild(task);

  input.value = "";
});
