/* eslint-disable no-shadow */ "use strict";
const tree = document.querySelector(".tree");
const list = [
    ...document.querySelectorAll("li")
];
list.map((li)=>{
    const span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
});
tree.addEventListener("click", (event)=>{
    const ul = event.target.nextElementSibling;
    if (ul.tagName === "UL") ul.hidden = !ul.hidden;
});

//# sourceMappingURL=index.f75de5e1.js.map
