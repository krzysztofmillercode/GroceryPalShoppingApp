console.log("This is my GroceryPal!");


var input = document.getElementById("new-item");

input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addItem();
    }
});

function addItem(){
    var item = "- " + document.getElementById("new-item").value;
    var h1 = document.createElement("h1");

    document.getElementById("new-item").value = '';

    h1.appendChild(document.createTextNode(item));

    h1.addEventListener("click", function(){
        h1.style.textDecoration = "line-through";
    }) 

    var div = document.getElementById("all-items");
    div.insertAdjacentElement("beforeend", h1);
}

function eraseList(){
    var list = document.getElementById("all-items");
    var i = 0;

    while(i < list.childNodes.length){
        list.removeChild(list.childNodes[i]);
    }
}