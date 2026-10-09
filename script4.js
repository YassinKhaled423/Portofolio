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
  }, 3000);
    document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("certificates-section").classList.add("d-none");
  });
  document.getElementById("view-cert1").addEventListener("click", function() {
    document.getElementById("certificates-section").classList.remove("d-none");
  });
   document.getElementById("close-modal2").addEventListener("click", function() {
    document.getElementById("certificates-section2").classList.add("d-none");
  });
 
  document.getElementById("view-cert2").addEventListener("click", function() {
    document.getElementById("certificates-section2").classList.remove("d-none");
  });
  document.getElementById("close-modal3").addEventListener("click", function() {
    document.getElementById("certificates-section3").classList.add("d-none");
  });
  document.getElementById("view-cert3").addEventListener("click", function() {
    document.getElementById("certificates-section3").classList.remove("d-none");
  });
  document.getElementById("close-modal4").addEventListener("click", function() {
    document.getElementById("certificates-section4").classList.add("d-none");
  });
 
  document.getElementById("view-cert4").addEventListener("click", function() {
    document.getElementById("certificates-section4").classList.remove("d-none");
  });
  document.getElementById("close-modal5").addEventListener("click", function() {
    document.getElementById("certificates-section5").classList.add("d-none");
  });
  document.getElementById("view-cert5").addEventListener("click", function() {
    document.getElementById("certificates-section5").classList.remove("d-none");
  });
  document.getElementById("close-modal6").addEventListener("click", function() {
    document.getElementById("certificates-section6").classList.add("d-none");
  });
  document.getElementById("view-cert6").addEventListener("click", function() {
    document.getElementById("certificates-section6").classList.remove("d-none");
  });