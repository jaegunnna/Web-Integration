var firebaseConfig = {
      apiKey: "AIzaSyBI8Q09VnRs2zrcAG1T-Hts2FetuMyiZ7Y",
      authDomain: "mentorschip-1572495247305.firebaseapp.com",
      databaseURL: "https://mentorschip-1572495247305.firebaseio.com",
      projectId: "mentorschip-1572495247305",
      storageBucket: "mentorschip-1572495247305.appspot.com",
      messagingSenderId: "278052058304",
      appId: "1:278052058304:web:2ad3b055e0aa1020caa925",
      measurementId: "G-M9ZXELCF78"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    firebase.auth.Auth.Persistence.LOCAL;

    $("#submitbtn").click(function()
    {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != "")
      {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error)
        {
          var errorCode = error.code;
          var errorMessage = error.message;


          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        })

      }
      else
      {
        window.alert("Please fill out all fields");
      }
    });
