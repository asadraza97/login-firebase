const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqkW9LRuBpYu9BBWNErLqjy2zeA0haV0o",
    authDomain: "login-form-8200f.firebaseapp.com",
    projectId: "login-form-8200f",
    storageBucket: "login-form-8200f.appspot.com",
    messagingSenderId: "106901722925",
    appId: "1:106901722925:web:9c5df9bf6b4122c05665a4",
    measurementId: "G-DPBJN3GWZ3"
  });
  
  const auth = firebaseApp.auth();
  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          location.replace('welcome.html')
      }
    })
  let loginForm = document.getElementById('main').addEventListener('submit', (event)=>{
    event.preventDefault()
});




  const  signUp = () =>{
    const email = document.getElementById('Email').value
    const password = document.getElementById('password').value
    auth.createUserWithEmailAndPassword(email, password)
    .then( (response)=>{
        console.log(response.message);
        alert( 'signUp Sucessfully')
    })
    .catch((error)=>{
        alert(error.message)
    })
  }



  const login  = () =>{
    const email = document.getElementById('Email').value
    const password = document.getElementById('password').value
    auth.signInWithEmailAndPassword(email, password)
    .then( (response)=>{
        console.log(response.message);
        alert( 'Login Sucessfully')
    })
    .catch((error)=>{
        alert(error.message)
    })
  }
