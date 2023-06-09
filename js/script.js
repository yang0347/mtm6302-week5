//creating an array using [] and comma separated list of valus 
//index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

//access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
//messageList.children[]

myColors.push("darksalmon")

messageList.children[2].innerHTML += myColors
