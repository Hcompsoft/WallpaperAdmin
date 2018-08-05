 var config = {
    apiKey: "AIzaSyBhv6XCikY0zCeqjp9Jy3-vJf9Hs-nQ34k",
    authDomain: "mywallpaperapp-12993.firebaseapp.com",
    databaseURL: "https://mywallpaperapp-12993.firebaseio.com",
    projectId: "mywallpaperapp-12993",
    storageBucket: "mywallpaperapp-12993.appspot.com",
    messagingSenderId: "615247177845"
  };
  firebase.initializeApp(config);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }