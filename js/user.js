window.onload = function(){
  let dl = document.getElementById("dl")
  let zc = document.getElementById('zc')
  let zcl = document.getElementById('h1')
  let dll = document.getElementById('h2')
  dl.onclick = function(){
    zcl.style.display = "none"
    dll.style.display = "block"
  }
  zc.onclick = function(){
    dll.style.display = "none"
    zcl.style.display = "block"
  }
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