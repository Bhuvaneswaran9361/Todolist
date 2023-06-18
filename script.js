const input = document.querySelector("input");
const ul = document.querySelector(".elementList");
const submitbtn = document.querySelector(".submit");

delTask = function(){
    console.log("Remove Element.....")
    var li = this.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}

submitbtn.onclick = () =>{
    console.log("Adding Element....")
    var div = document.createElement('div');
    var listItem =  document.createElement('li');
    var delbtn = document.createElement('button');
    if(input.value === ""){
        alert("You cannot create a empty TodoList");
        return;
    }
    div.className = "div-list"
    delbtn.innerText = "delete";
    listItem.innerText = input.value;
    listItem.className = "listItem";
    delbtn.className = "delbtn";
    div.appendChild(listItem);
    div.appendChild(delbtn);
    ul.appendChild(div);
    delbtn.onclick = delTask;
}

