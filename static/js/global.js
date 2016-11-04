let appear = (element) => {
	let opacity = 0;
	function slowMotion() {
		opacity += 0.02;
		element.style.opacity = opacity;

		if(opacity >= 1)
			clearInterval(timer);
	}

	let timer = setInterval(slowMotion, 40);
};

let isPasswordValid = () => {
	return false;
};

document.body.addEventListener('click', function(event) {
	if(event.target.id === "login-button") {
		let password = document.getElementById("password").value;

		if(!isPasswordValid()) {
			let loginForm = document.querySelector(".login");
			let location = 18, num = 1;

			let shake = () => {
				location -= 0.3;
				loginForm.style.marginLeft = location * num + "px";

				num *= -1;

				if(location <= 0)
					clearInterval(timer);
			};

			let timer = setInterval(shake, 10);

			return;
		}

		window.location.assign("../main.html");
	}
});
