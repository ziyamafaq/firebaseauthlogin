const firebaseConfig = {
  apiKey: "AIzaSyBAzCqCJWfoDYBNZVfYUDyMWMTALOSlqVA",
  authDomain: "fir-auth-973d7.firebaseapp.com",
  projectId: "fir-auth-973d7",
  storageBucket: "fir-auth-973d7.appspot.com",
  messagingSenderId: "1082933181971",
  appId: "1:1082933181971:web:9f987524632fd3509889e6"
};

var app = firebase.initializeApp(firebaseConfig);

function getValue(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
     
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

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
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
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
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}