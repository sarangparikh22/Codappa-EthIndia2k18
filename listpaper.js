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
var getPaperRef = database.ref('research');
var divData;
var count = 0;
getPaperRef.on('value',function(snapshot){
    snapshot.forEach(function(childSnapshot) {
        var element = document.getElementById('afterthis');
        var childData = childSnapshot.val();
        console.log(childData);
        // divData = "<div class='x_panel'><div class='x_title'><h4><b>Type: "+childData.type+"</b></h4></div>"+childData.desc+"<br><b>Location:-<br> Latitude: "+childData.lat+"<br>Longitude: "+childData.lng+"</b><img src='"+childData.img+"' style='float:right;width:200px;height:200px;'><br><i class='fa fa-location-arrow'></i> <a href='http://maps.google.com/maps?q="+childData.lat+","+childData.lng+"' target='_blank'>View on MAP</a></div>";
        // element.insertAdjacentHTML('afterend', divData);
        //count++;
        divData = `<div id='rp${count}'>Principal: ${childData.principal} <br>Period: ${childData.period} <br>Interest: ${childData.interest} <br> <br> `;
        element.insertAdjacentHTML('afterend', divData);
        count++;
      });
  
})
 
