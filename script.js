document.getElementById("parent").innerHTML=("something else");

//document.getElementById("parent").style.backgroundColor=("red");
//document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")
document.getElementsByClassName("exercise")[0].innerHTML=("I am Garima oli");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 18 years old");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:uppercase");
document.querySelector("h2").innerHTML=("I am sanvi");
document.querySelector("#h2").innerHTML=("I am sania");
document.querySelector(".hey").innerHTML=("I am fariah");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am lunia");
}

//function myFunction(){
//  document.open();
//   document.write("<h1>Hello world</h1>");
//    document.close();
//}

function myFunction(){
    const myWindow = Window.open();
    myWindow.document.open();
    myWindow.document.write("<h1>Hello world</h1>")
    myWindow.document.close();
}