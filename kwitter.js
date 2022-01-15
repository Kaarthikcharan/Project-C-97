function addUser(){
sign_up=document.getElementById("sign_up").value;
localStorage.setItem("sign_up",sign_up);
window.location="kwitter_room.html";
}