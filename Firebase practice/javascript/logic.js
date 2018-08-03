  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAFTq4qNJ_ZUNT4HDvsBFnrwpocxZ-0Xn4",
      authDomain: "clickcountdown-96dcb.firebaseapp.com",
      databaseURL: "https://clickcountdown-96dcb.firebaseio.com",
      projectId: "clickcountdown-96dcb",
      storageBucket: "clickcountdown-96dcb.appspot.com",
      messagingSenderId: "786541742124"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var initialValue = 100;

  var clickCounter = initialValue;


  database.ref().on("value", function (snapshot) {
      console.log(snapshot.val());
      clickCounter = snapshot.val().clicks;
      $("#clickValue").text(snapshot.val().clicks);
      console.log(clickCounter);
      //   }, function (errorObject) {
      //       console.log("The read failed: " + errorObject.code);
  });

  $("#clickButton").on("click", function () {
      clickCounter--;
      database.ref().set({
          clicks: clickCounter
      });
      console.log(clickCounter);
  });

  $("#restart").on("click", function () {

      clickCounter = initialValue;

      database.ref().set({
          clicks: clickCounter
      });

      console.log(clickCounter);

      $("#clickValue").text(clickCounter);

  });