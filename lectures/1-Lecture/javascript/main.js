//



var a = 5;

var integerVar = 5;
var floatNum = 1.2;

function test() {
	var innerVar = 1;
	
	console.log(floatNum);
	console.log(innerVar);
	
	function testDeeper() {
		var deeperVar = 3;
		
		// floatNum, integerVar
		// innerVar
		// deeperVar
	}
}

function andExplain() {
	var a = 3;
	var b = 5;
	
	if (a == 3 && b == 5) {
		console.log("First case");
	}
	if (a != 3 || b != 5) {
		console.log("Second case");
	}
	
	/*
	0 & 0 = 0
	1 & 0 = 0
	0 & 1 = 0
	1 & 1 = 1
	
	0 | 0 = 0
	1 | 0 = 1
	0 | 1 = 1
	1 | 1 = 1
	*/
}

/*
if (((a == 3) && (b == 5)) || c == 8) {

}
else if ()
else if ()
else () {

}


if () {
	// 
}

if () {
	console.log();
	var b = 5;
}

if () 
{
	var a = 5;
	if () 
	{
		sdasd
	}
}

// Not good
var a;
var b = [];

// Good
var gallery;
var picturesFromGallery = [];

// 1, 2, 3, 4, 5
var a = 1;
if (a == 1) {
}
else if (a == 2) {
}
else if (a == 3) {
}
else if (a == 4) {
}
*/

function swicthExplain() {
	var a = 2;
	switch (a) {
		case 1: console.log("one");
		case 2: console.log("two");
		case 1: console.log("one");
		case 3: console.log("three"); break;
	}
}

function whileExample() {
	var counter = 11;
	
	while (counter < 10) {
		document.write(counter +": We are learning JavaScript while loop.<br />");
		counter++;
	}
	
	do {
		document.write(counter +": We are learning JavaScript do while loop.<br />");
		counter++;
	} while (counter < 10);
	
	for (var counter=0; counter<=10; counter++) {
		if (counter == 3) {
			document.write("Counter is 3 --- <br />");
			continue;
		}
		if (counter == 2) {
			return;
		}
		if (counter == 4) {
			document.write("End of loop");
			break;
		}
		document.write(counter +": We are learning JavaScript for loop.<br />");
	}

	
}







