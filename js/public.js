window.onload = function(){

let a = document.getElementById("a")

let hh = document.getElementById("hh")
hh.style.display = "none"

a.onclick = function(){
  if(hh.style.display == "block"){
    hh.style.display = "none"
  }else{
    hh.style.display = "block"
  }
}
}