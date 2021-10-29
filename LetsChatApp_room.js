// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBgrAnCxbTV1Rn1l0NPrd1b3pCADsA0Ejc",
    authDomain: "kwitter-27244.firebaseapp.com",
    databaseURL: "https://kwitter-27244-default-rtdb.firebaseio.com",
    projectId: "kwitter-27244",
    storageBucket: "kwitter-27244.appspot.com",
    messagingSenderId: "1080790011950",
    appId: "1:1080790011950:web:8c1281bffd04ea2acd4fbf",
    measurementId: "G-35BRT1M1QC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name1").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding user"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "LetsChatApp_page.html";
}
function logout(){
  localStorage.removeItem(room_name);
  localStorage.removeItem(user_name);
  window.location="index.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
//Start code
console.log("ROOM NAME - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
//End code
});
});
}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);

 window.location = "LetsChatApp_page.html";
}