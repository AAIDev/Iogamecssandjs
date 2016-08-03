function onPlay() {
    var menu = document.getElementById("Menu");
    var name = document.getElementById("name").value;
    if (name != "") {
            menu.disabled = true;
    menu.hidden = true;
    console.log(menu.disabled);
    console.log(name);
    if (name.length <= 5) { 
    document.getElementById("nameshowed").innerHTML = name;
        }
    else {
        document.getElementById("nameshowed").innerHTML = "U HAXOR";
    }
    }
    else {
        document.getElementById("error").innerHTML = "Error: Please enter your name";
    }
}
