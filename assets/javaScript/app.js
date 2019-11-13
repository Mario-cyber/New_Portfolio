// link to datbas to store use info from conact section
var config = {
	apiKey: "AIzaSyDOrIyEwDSHVYgWPxVFuMvxUTy9GuRMK-k",
	authDomain: "my-portfolio-e797a.firebaseapp.com",
	databaseURL: "https://my-portfolio-e797a.firebaseio.com",
	projectId: "my-portfolio-e797a",
	storageBucket: "my-portfolio-e797a.appspot.com",
	messagingSenderId: "1093669853047",
	appId: "1:1093669853047:web:cb57a33cd731fd0264f372",
	measurementId: "G-P84TF49CJL"
};
// initialyze firebase 
firebase.initializeApp(config);

// store our database in a varibale to facilitate its use.
let database = firebase.database();

$(document).ready(function () {
	// create variables for user input on contact forms 
	let name = "";
	let email = "";
	let message = "";

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

	// capture user input from "contact me form" 

	$("#cont_btn").on("click", function () {
		event.preventDefault()
		name = $("#name").val().trim()
		email = $("#email").val().trim()
		message = $("#message").val().trim()

		console.log(name)
		console.log(email)
		console.log(message)
	})



})