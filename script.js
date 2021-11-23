const input = document.querySelector("inputfield");
const button = document.querySelector("button");
const list = document.querySelector("list");

button.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.Value;
    list.appendChild(li);

})

