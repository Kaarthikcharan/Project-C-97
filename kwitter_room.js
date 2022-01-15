
var firebaseConfig = {
      apiKey: "AIzaSyAbIlq2d5UeqDhIwyBNCGt3FEAKSur13Go",
      authDomain: "project-c-94-97c82.firebaseapp.com",
      databaseURL: "https://project-c-94-97c82-default-rtdb.firebaseio.com",
      projectId: "project-c-94-97c82",
      storageBucket: "project-c-94-97c82.appspot.com",
      messagingSenderId: "1038759531692",
      appId: "1:1038759531692:web:eb4db1407106acc10b3b09",
      measurementId: "G-S88MDKBYKJ"
};
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("sign_up");
    document.getElementById("user_name").innerHTML="welcome "+user_name+" !";
    
    function add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
    function getData() {
          firebase.database().ref("/").on('value', function(snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot) {
                      childKey  = childSnapshot.key;
           Room_names = childKey;
           row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML+=row;
    
          
          });});}
    getData();
    
    function redirectToRoomName(name){
          localStorage.setItem("room_name", name);
          window.location="kwitter_page.html";
    }
    function logout(){
          localStorage.removeItem("sign_up");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }  