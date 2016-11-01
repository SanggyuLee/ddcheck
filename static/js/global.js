function appear(element) {
	let opacity = 0;
	function slowMotion() {
		opacity += 0.02;
		element.style.opacity = opacity;

		if(opacity >= 1)
			clearInterval(timer);
	}

	let timer = setInterval(slowMotion, 40);
}

document.body.addEventListener('click', function(event) {
	if(event.target.id === "login-button") {
		let password = document.getElementById("password").value;

		/* TODO: Need to make password checking phase */
		/*
			if(!isPasswordValid())
				return;
		*/

		window.location.assign("../main.html");
	}
});
