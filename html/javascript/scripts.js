function removeItemDelayed() {
    setTimeout(function(){
        document.getElementById("to-be-removed").remove()
    }, 5000);
}

function showAlertDelayed() {
    setTimeout(function(){
        alert('This is an alert!')
    }, 5000);
}

function addItemDelayed() {
    const para = document.createElement("p");
    para.setAttribute("id", "added-element");
    const node = document.createTextNode("Added element after click!");
    para.appendChild(node);
    const element = document.getElementById("to-receive-new-element");
    setTimeout(function(){
        element.appendChild(para);
    }, 5000);
}