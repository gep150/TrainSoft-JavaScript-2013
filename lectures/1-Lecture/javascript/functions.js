
function nameOfTheFunction(inputArg1, inputArg2) 
{
	inputArg1 = inputArg1 || 0;
	inputArg2 = inputArg2 || 0;
	
	console.log(inputArg1);
	console.log(inputArg2);
	
	return inputArg1 + inputArg2;
	
	// Not interpert
	var b = 4;
}

function area(a, b) {
	if (a < 0) {
		return function(a) {
			return a*a;
		}
	}
	else if (a > 0) {
		return b;
	}
	return a*b;
}

var object = {};

bottleMark = "Devin"
bottleVolume = "0.6L"

function printBottle(bottleMark, bottleVolume) {

}

var bottle = {
	mark: "Devin",
	volume: "0.5L"
};

var human = {
	hair: "Brown",
	eyes: "Green",
	weight: 54,
	isSmoking: false,
	
	walk: function() {
		console.log("Human is walking");
	},
	eat: function() {
		this.weight += 21;
	}
}

var human2 = {
	hair: "Brown",
	eyes: "Green",
	name: "",
	weight: 54,
	isSmoking: false,
	
	walk: function() {
		console.log("Human is walking");
	},
	eat: function() {
		this.weight += 21;
	}
}


// This is a class example
function Human(name, weight) {
	this.name = name;
	this.hair = "default";
	this.weight = weight;
}

var human1 = new Human("Pesho",  30);
var human2 = new Human("Gosho",  50);

function applyJob(human, job) {
	human.job = job;
	return human;
}

human2 = applyJob(human2, "Barman");



function Menu(div, image) {
	this.divContainer = document.getElementById(div);
	this.image = image;
	
	console.log(this.divContainer);
	this.divContainer.className = "menu";
}
Menu.prototype.show = function() {
	this.divContainer.style.display = "block";
}
Menu.prototype.hide = function() {
	this.divContainer.style.display = "none";
}
Menu.prototype.addImage = function() {
	
}
	
var menu1 = new Menu("menu1");
var menu2 = new Menu("menu2");
var menu3 = new Menu("menu3");




