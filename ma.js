var names = [];

document.getElementById("addN").addEventListener("click", function(){
    console.log("click");
    
    // console.log(names);
    var name = document.getElementById("inputN").value;
    console.log(name);
    names.push(name);
    console.log(names);
    document.getElementById("interface").innerHTML = names;
    document.getElementById("inputN").value = "";
})
document.getElementById("delN").addEventListener("click", function(){
    console.log("click");
   console.log(names);
   names.pop();
document.getElementById("interface").innerHTML=names;
document.getElementById("inputN").value = "";
})

