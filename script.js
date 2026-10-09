document.getElementById("btn1").addEventListener("click", function() {
    document.body.classList.toggle("dark_mode");   
    if (document.body.classList.contains("dark_mode")){
    document.getElementById("btn1").innerText="Light_mode"  
}
else{
  document.getElementById("btn1").innerText="Dark_mode" 
}
});
setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000);