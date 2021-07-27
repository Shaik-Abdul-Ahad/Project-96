//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAyWH5hsYtgoCqvlmez3XZegVEteSj7mQc",
      authDomain: "chat-app-ahad.firebaseapp.com",
      databaseURL: "https://chat-app-ahad-default-rtdb.firebaseio.com",
      projectId: "chat-app-ahad",
      storageBucket: "chat-app-ahad.appspot.com",
      messagingSenderId: "994333688656",
      appId: "1:994333688656:web:38a33e7e5796d1e084e255"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() {
      
      console.log(room_name + user_name);
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout() {
      
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}
