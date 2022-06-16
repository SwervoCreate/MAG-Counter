
var url = "https://store.zapier.com/api/records?Customers&secret=cd7a2785-3db3-4711-9b3f-c0bcca85ab28";

var xhr = new XMLHttpRequest();

function go() {
xhr.open("GET", url);

xhr.onreadystatechange = function () {
if (xhr.readyState === 4) {
console.log(xhr.status);
console.log(xhr.responseText);


data = JSON.parse(xhr.response);
const child = document.getElementById("container").firstElementChild;
const container = document.getElementById("container");
const div = document.createElement("h1");
const node = document.createTextNode(data.Customers);
container.removeChild(child);
div.appendChild(node);
container.appendChild(div);
div.className = "counter";
div.id = "counter"



}};

xhr.send();
};
go();
setInterval(go, 6000);




