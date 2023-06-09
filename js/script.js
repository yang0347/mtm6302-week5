//creating an array using [] and comma separated list of valus 
//index of an array starts with 0
const myColor = ["red", "green", "blue", "white", "black", "tomato"]

//access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColor[3]

myColor[4] = "cyan"

messageList.children[1].innerHTML += myColor[4]
