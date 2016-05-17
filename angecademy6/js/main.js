$(document).ready(function() {

$('#btn-logout').click(function(){
	var ref = new Firebase("https://sizzling-heat-4851.firebaseIO.com");
	ref.unauth();
	window.location.href="index.html";
});


    $('#loginbox').click(function() {
        var loginUsername = $('#login-username').val();
        var loginPassword = $('#login-password').val();

        console.log(loginPassword);
        var ref = new Firebase("https://sizzling-heat-4851.firebaseIO.com");

        ref.authWithPassword({
            email: loginUsername,
            password: loginPassword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                localStorage.setItem("greeting", loginUsername);
                alert("Hell");
                window.location.href="index2.html";

            }
        });
    });

    $('#btn-signup').click(function() {
        alert('hello!');
        var ref = new Firebase("https://sizzling-heat-4851.firebaseIO.com");
        var firstName = $('#firstname').val();
        var lastName = $('#lastname').val();
        var email = $("#register-email").val();
        var userPassword = $("#user-password").val();
        // 	authClient.createUser(email, password, function (error, user) {
        console.log(userPassword);
        ref.createUser({
            email: email,
            password: userPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with us:", userData.uid);
            }
        });

    });


});
