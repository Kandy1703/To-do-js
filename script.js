const addTaskPopup = document.getElementById("popup")
const cardContainer =document.getElementById("cardcontainer")
const newCardName = document.getElementById("cardname")
const blur = document.getElementById("blur")
var popupbox1 = document.getElementById("popupbox1") // list Item popup box
var listItem = document.getElementById('listItem')
let cardID = 0

// let taskPopupVisible = false

// @@@@@@ Add Item Button 
function showAddTask(){
        addTaskPopup.classList.remove('hide')
        blur.classList.add('active')
        // popupadditem.style.display  = 'block'
        // taskPopupVisible = false  
    }
    // @@@@@ Close Button@@@
function hideAddTask(){
        addTaskPopup.classList.add('hide')
        blur.classList.remove('active')
        // taskPopupVisible = true
    }  

// @@@@@ Close Button@@@
// function hideAddTask(){
//     addTaskPopup.classList.add('hide')
//         taskPopupVisible = false 
// }

// @@@@@@@@@@@@@ Adding Card@@@@@@@@@@@@@@@@@

var addItemImg = document.createElement("img")

function addCard(){
    blur.classList.remove('active') // Background blur Property
    cardID++
    var newCard = document.createElement("div")
    var cardTitle =document.createElement("h1")
    var hrr = document.createElement("hr")
    var itemList = document.createElement("div")
    var styleimg = document.createElement("div")
    styleimg.classList.add("styleimgss")
    var deleteimage = document.createElement("img")
    var addItemImg = document.createElement("img")

    // itemList.classList.add('contentList')

    newCard.setAttribute("id", cardID)
    newCard.appendChild(cardTitle)
    newCard.appendChild(hrr)
    newCard.appendChild(itemList)
    // newCard.appendChild(doneButton)
    newCard.appendChild(styleimg)
    styleimg.appendChild(deleteimage)
    styleimg.appendChild(addItemImg) 
    cardContainer.appendChild(newCard)

    newCard.classList.add("card")
    itemList.classList.add("liststyle")
    cardTitle.innerText = newCardName.value
    deleteimage.src = "./delet.png"
    addItemImg.src = "./add.png"       // add List
    
    deleteimage.classList.add("deleteBtn")  // delete icon's the add class Name 
    //addItem.classList.add("button") // add Button's the class name

    deleteimage.addEventListener("click",function(){
        newCard.remove()
        // popupbox1(itemList)
    })
    
    addItemImg.addEventListener('click',function(){
        popupbox1.classList.remove("hide1")
        // popupbox1(itemList)
    })
    
    hideAddTask() // remove popup container This line code refer 18 line



//  @@@@@@@@@@@@@@@@@@@@@ Function  Second Input Container @@@@@@@@@@@@@@@@@@@@@@@@@

addItemImg.addEventListener("click", function(){
    // Create popupBox Enter list items purpose   
    var newCardtwo = document.createElement("div") 
    var htwo = document.createElement("h2")
    var styelinputArea = document.createElement("div")

    var inputtag = document.createElement("input")
    var styleButton = document.createElement("div")

    var addbutton =document.createElement('button')
    var closebutton = document.createElement('button')

    newCardtwo.appendChild(htwo)
    newCardtwo.appendChild(styelinputArea)
    newCardtwo.appendChild(styleButton)

    styelinputArea.appendChild(inputtag)
    
    // add and close button  AppendChild 
    styleButton.appendChild(addbutton)
    styleButton.appendChild(closebutton)

    // parent appendchild
    popupbox1.appendChild(newCardtwo)
    
    // Text Headding add button and close buttone inneText

    inputtag.setAttribute('type','text') // listitem list activeites ex. food, item
    inputtag.setAttribute('value', '')
    inputtag.setAttribute('id',"listItem")
    htwo.innerText = "Add New Item"
    addbutton.innerText = "Add"
    closebutton.innerText = "Close"
   
    newCardtwo.classList.add("box1")
    styelinputArea.classList.add("input-box1")
    styleButton.classList.add("addclose1")
    addbutton.classList.add("addbox1")
    closebutton.classList.add("closebox1")

    
    closebutton.addEventListener("click", function(){
        newCardtwo.remove()
    })

    // list items function  
    addbutton.addEventListener("click", function(){
        newCardtwo.remove()    
        // list items function
        var item = document.createElement('ol')
        item.innerText = inputtag.value
        itemList.appendChild(item)
        
        // Done button function 
        var doneButton = document.createElement("button")
        doneButton.innerText = "Done"
        itemList.appendChild(doneButton)
        doneButton.classList.add("doneBtn")

            // Done button strike line and remove done button
            doneButton.addEventListener("click", function(){
                doneButton.style.display = "none"
                item.style.textDecoration = "line-through";
            })

            item.addEventListener("click",function(){
                item.style.textDecoration = "none";
                doneButton.style.display = "block";
            })
            
    })
    
})
}



















// var popup = document.getElementById("popup")
// var blur = document.getElementById("blur")
// var popupadditem =document.getElementById('popupadditem')
// var myText = document.getElementById('myText') 
// // 

// function show(){
//     // var popText = document.createElement("p")
//     // popup.appendChild(popText)

//     popupadditem.style.display = "none"
//     blur.style.filter = "none"
//     popup.classList.add('show')    
// }

// function hide(){
//     popup.classList.remove('show')
//     console.log(popup)

// }


// function showAddTask(){
    
//     blur.classList.add('active')
//     popupadditem.style.display  = 'block'
// }
