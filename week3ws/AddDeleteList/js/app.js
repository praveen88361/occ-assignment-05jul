function usertext() {
    var val = document.getElementById("userinput").value;
    if (val.length == 0) {
        document.getElementById("err").innerHTML = "Enter Text";
        document.getElementById("err").style.color = "red";
    } else {
        document.querySelector("#userinput").value = "";
        document.getElementById("err").innerHTML = "";
        var list = document.createElement("li");
        var textNode = document.createTextNode(val);
        list.appendChild(textNode);
        var btn = document.createElement("Button");
        btn.innerHTML = "Delete";
        btn.className = "close";
        list.appendChild(btn);
        document.getElementById("addlist").appendChild(list);
        var close = document.getElementsByClassName("close");
        console.log(close);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                this.parentElement.remove();
            }
        }
    }
}