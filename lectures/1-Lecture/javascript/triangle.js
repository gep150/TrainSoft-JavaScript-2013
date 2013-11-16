
function getInput() {

	// Get fields from the HTML
	var fieldSideA = document.getElementById("side-a");
	var fieldSideB = document.getElementById("side-b");
	//var fieldSideC = document.getElementById("side-c");

	// Get their values
	var sideA = fieldSideA.value;
	var sideB = fieldSideB.value;
	//var sideC = fieldSideC.value;
	
	// Error check with this var
	var errorOccured = false;
	
	// Validate input fields
	var sideAValidateFieldResult = validateField(sideA);
	if (sideAValidateFieldResult == true) {
		sideA = parseInt(sideA);
	}
	else {
		errorOccured = true;
	}
	
	if (validateField(sideB) == true) {
		sideB = parseInt(sideB);
	}
	else {
		errorOccured = true;
	}
	
	//sideC = (validateField(sideC) == true) ? parseInt(sideC) : errorOccured = true;;

	
	if (errorOccured == true) {
		// If error
		alert("Fill your fields again!!!")		
	}
	else {
		// else calculate task
		calculateTrianglePerimeter(sideA, sideB);
	}
}

// Validate is tha value a int
function validateField(field) {
	return !isNaN(parseFloat(field)) && isFinite(field);
}

// 
function calculateTrianglePerimeter(a, b, c) {
	// Calculate result frominput arguments
	//var result = a + b + c;
	var result = 2*a + 2*b;
	
	// Get input and place the result there
	var resultField = document.getElementById("result");
	resultField.value = result;
}

function solveTask() {
	getInput();
}

