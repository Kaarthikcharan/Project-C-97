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

var room_name=localStorage.getItem(room_name);
var user_name=localStorage.getItem(user_name);

function send(){
      msg=document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
                  childKey  = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });
  });
}
getData();

function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("sign_up");
      localStorage.removeItem("room_name");
      window.location="index.html";
}  
