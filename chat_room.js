
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyADJT3uhnjAE2C0ecIGsxYW7woOiY436vY",
    authDomain: "kwitter-e9dea.firebaseapp.com",
    databaseURL: "https://kwitter-e9dea-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9dea",
    storageBucket: "kwitter-e9dea.appspot.com",
    messagingSenderId: "609215504311",
    appId: "1:609215504311:web:9646898eb59db3ed555232"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "chat_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row

});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "chat_room.html";
}