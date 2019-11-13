$(document).ready(function () {

	// create an array for your projects URLS so you don't have to harcode them into HTML
	let externalLinks = {
		project_1: "https://mario-cyber.github.io/Train-Scheduler/",

		project_2: " https://mario-cyber.github.io/GifTastic-/",

		project_3: " https://mario-cyber.github.io/Psychic-Game/",

		project_4: "https://www.google.com/",

		github: "https://github.com/Mario-cyber",

		linkedin: "https://www.linkedin.com/in/mario-rojas/",

	}
	// cretae an onCLick function that obtains the id of the btn clicked
	// create a working urls by matching the id obtained with the item in your projects object with the same key
	// use the location.assing mwthod with your new URL to redirect to your project 

	$(".thumbnail").on("click", function () {
		let id = $(this).attr("id")
		url = externalLinks[id]
		location.assign(url)
	});

	$(".social").on("click", function () {
		let alt = $(this).attr("alt")
		url = externalLinks[alt]
		location.assign(url)
	});



})