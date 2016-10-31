document.body.addEventListener('click', function(event) {
	if(event.target.id === "login-button") {
		let password = document.getElementById("password").value;
		alert(password);
	}
});
