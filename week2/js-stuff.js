function bouncer(year, name){
	if(2017 - year >= 21){
		console.log("You can come in")
	} else if(name == "Ashley" && (2017 - year < 21)){
		console.log("Welcome")
	} else {
		console.log("You can't come in!")
	}
}

function lieDetector(year){
	if(year != 2017){
		console.log("You're a liar")
	} else{
		console.log("You're telling the truth")
	}

}