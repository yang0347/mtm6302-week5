//creating an array using [] and comma separated list of valus 
//index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

//access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
//messageList.children[]是定具体位置的 

myColors.push("darksalmon")

messageList.children[2].innerHTML += myColors

myColors.pop()
messageList.children[3].innerHTML += myColors


myColors.shift()
messageList.children[4].innerHTML += myColors

myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

//add a new value at index 2, using splice() start index 2, delete 0, new value "royalblue"
myColors.splice(2,0,"royalblue")
messageList.children[6].innerHTML += myColors

//sorting array using sort() method, default for all lowercase text is ascending alphabetial
myColors.sort()
messageList.children[7].innerHTML += myColors

//connecting arrys using concat
const darkColors = ["darkseagreen", "darkgreen", "darkred"]

const allColors = myColors.concat(darkColors)
messageList.children[8].innerHTML += allColors.join("-")

//searching in an array

/*  const searchMessage = document.getElementById("colorResponse")

function doYouHaveColor (colorName) {
    let colorIndex = allColors.indexOf(colorName)
    if (colorIndex >= 0) {searchMessage = "Yes, we have this color"}
    else{
        searchMessage.innerHTML = "No, we do not have this color"
    }
} */


function doYouHaveColor (colorName) {
    let colorIndex = allColors.indexOf(colorName)
    if (allColors.includes(colorName)) {searchMessage.innerHTML = "Yes, we have this color"}
    else{
        searchMessage.innerHTML = "No, we do not have this color"
    }
}

const scores = [43, 68, 35, 82]

const scoreMessageList = document.getElementById("scoreMessages").children

//create a new array passingScore out of the scores array by filtering the values based on the function that returns the values that are greater than 50
const passingScores = scores.filter(score => score > 50)
scoreMessageList[0].innerHTML += passingScores