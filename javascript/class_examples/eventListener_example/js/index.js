
//EventHadlers are asynchronous. This prevents them from stopping code after them from loading
var addButton = document.getElementById("addButton");
addButton.addEventListener("click",addNewButton);

function addNewButton() 
{
  var div = document.getElementById("buttons");
  var buttons = document.getElementsByTagName("button"); //Get all buttons on this page
  var button = document.createElement("button"); //Create a new button
  button.innerHTML = "Button " + buttons.length;
  button.className = "dynamic";
  button.id = "button"+buttons.length;

  div.appendChild(button); //Add a button to div
}