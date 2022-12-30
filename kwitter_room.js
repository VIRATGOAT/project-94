
var firebaseConfig = {
    apiKey: "AIzaSyBX5_1-cBP_ZZ_An_wpXssegfm1cqLZoJg",
    authDomain: "kwitter-a91e8.firebaseapp.com",
    projectId: "kwitter-a91e8",
    storageBucket: "kwitter-a91e8.appspot.com",
    messagingSenderId: "797333851226",
    appId: "1:797333851226:web:17cbabc71dc9f6342a5c63"
  };

  firebase.initializeApp(firebaseConfig);
  function addRoom(){
    room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose:"adding RoomName"
     });
     localStorage.setItem("room_name", room_name);
     window.location="kwitter_page.html";
  }

  function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html";
  }

