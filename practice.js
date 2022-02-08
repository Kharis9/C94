//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBHOt6UpP9trCr-FUFQbO012pM96MdrmqA",
    authDomain: "rocketshare-baeee.firebaseapp.com",
    databaseURL: "https://rocketshare-baeee-default-rtdb.firebaseio.com",
    projectId: "rocketshare-baeee",
    storageBucket: "rocketshare-baeee.appspot.com",
    messagingSenderId: "136516183815",
    appId: "1:136516183815:web:0ebc3445cb56db629387a2",
    measurementId: "G-P4XL4FSS2Z"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}