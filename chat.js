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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




