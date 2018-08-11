var config = {
    apiKey: "AIzaSyD58XDi6EV4zKagbtFzjsHPzadZK0WvE0A",
    authDomain: "khoj-3b7be.firebaseapp.com",
    databaseURL: "https://khoj-3b7be.firebaseio.com",
    projectId: "khoj-3b7be",
    storageBucket: "khoj-3b7be.appspot.com",
    messagingSenderId: "805090784111"
  };
firebase.initializeApp(config);


var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('research/').set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

var file;
var fileButton;
var uploader;
var principal,interest,period;
function test1(){
    fileButton = document.getElementById('myFile');
    uploader = document.getElementById('uploader');
    principal = document.getElementById('principalText');
    interest = document.getElementById('interestText');
    period = document.getElementById('periodText');
}
function check(){
    file = fileButton.files[0];
    var storageRef = firebase.storage().ref('research/' + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(percentage);
            uploader.value = percentage;
        },
        function error(err){

        },
        function complete(){
            firebase.database().ref('research/').push({
                principal: principal.value,
                interest: interest.value,
                period : period.value
              });
            alert("Done! You are all Set")
        }
    )
};

function test(){
    console.log(file);
}