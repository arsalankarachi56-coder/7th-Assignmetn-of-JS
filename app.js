var list = ["samosa" , "pakora" , "roll"] ;

var order = []

var price = 10 ;

function showList(){
    var addList = document.getElementById("list") ;

    addList.innerHTML = "" ;

    for(var i = 0; i < list.length;i++){
        addList.innerHTML += `<li>${list[i]} <button onclick="newList(${i})">Order</button></li>`
    }

}

function newList(index){
    order.push(list[index])

    yourList()
}

function yourList(){
    var printList = document.getElementById("your-list") ;

    printList.innerHTML = "" ;

    for(var i = 0 ; i < order.length; i++){
        printList.innerHTML += `<li>${order[i]} RS${price} <button onclick="DeleteItems(${i})">Delete</button></li>`
    }

    calculateTotal()

}

function DeleteItems(index){
    order.splice(index , 1)

    yourList()
}

function calculateTotal() {
    var total = 0;
    for (var i = 0; i < order.length; i++) {
        total += price;
    }
    
    document.getElementById("total").innerHTML =   `${total}`;

}



