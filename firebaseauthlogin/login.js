var firebaseConfig = {
    apiKey: "AIzaSyDNWRtGUHzXqUc4g8b-j5gTLHsfpagbu1g",
    authDomain: "authclass-33b86.firebaseapp.com",
    projectId: "authclass-33b86",
    storageBucket: "authclass-33b86.appspot.com",
    messagingSenderId: "943042667714",
    appId: "1:943042667714:web:fd6b8770392fca9f5cc75b"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });

  
}


function forgetpassword(){
    var email = document.getElementById("Useremail");
  
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        alert("password reset email sent...");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  
  }
  function gitlogin(){
    var provider = new firebase.auth.GithubAuthProvider();
  
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;
  
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  
  function loginWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
