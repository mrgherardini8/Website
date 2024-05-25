function navbarUpdate(navbar, pageName) {
	var element = "";
	// Home Page
	element = document.createElement("a");
	if (pageName == "index") {
		element.setAttribute("href", "#");
	} else {
		element.setAttribute("href", "/");
	}
	var subelement = document.createElement("img");
	subelement.setAttribute("src", "../resources/media/temptestfav2.png");
	subelement.setAttribute("alt", "Logo");
	element.appendChild(subelement);
	navbar.appendChild(element);

	// About Me Page
	element = document.createElement("a");
	element.innerHTML = "About Me";
	if (pageName == "aboutme") {
		element.setAttribute("href", "#");
	} else {
		element.setAttribute("href", "/aboutme.html");
	}
	navbar.appendChild(element);

	// Resume Page
	element = document.createElement("a");
	element.innerHTML = "Resume";
	if (pageName == "resume") {
		element.setAttribute("href", "#");
	} else {
		element.setAttribute("href", "#");
	}
	navbar.appendChild(element);

	// Projects Page
	element = document.createElement("a");
	element.innerHTML = "Projects";
	if (pageName == "projects") {
		element.setAttribute("href", "#");
	} else {
		element.setAttribute("href", "/projects/");
	}
	navbar.appendChild(element);

	// Contact Page
	element = document.createElement("a");
	element.innerHTML = "Contact";
	if (pageName == "contact") {
		element.setAttribute("href", "#");
	} else {
		element.setAttribute("href", "/contact.html");
	}
	navbar.appendChild(element);
}
