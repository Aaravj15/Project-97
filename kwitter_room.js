 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCBecXXe7WqHFgmPty41Hh3JBxbB13F5GA",
  authDomain: "class-test-d4bca.firebaseapp.com",
  databaseURL: "https://class-test-d4bca-default-rtdb.firebaseio.com",
  projectId: "class-test-d4bca",
  storageBucket: "class-test-d4bca.appspot.com",
  messagingSenderId: "709830115233",
  appId: "1:709830115233:web:d09d1881cfefff84e555e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}