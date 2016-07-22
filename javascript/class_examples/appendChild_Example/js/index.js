//Ask students how to give a button a className and sequential id
//Student activity: Button that remove the last button 

function addNewButton() 
{
  var div = document.getElementById("buttons");
  var buttons = document.getElementsByTagName("button"); //Get all buttons on this page
  var button = document.createElement("button"); //Create a new button
  button.innerHTML = "Button " + buttons.length;

  div.appendChild(button); //Add a button to div
}