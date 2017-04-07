function writeTweet()
{
	var randIndex;
	var sentence;
	var intro = [
		"The city of Bellevue, Washington ",
		"A Florida man ",
		"The crew of aptly named naval vessel, USS Misfortune, ",
		"An intrepid troupe of local circus performers "
	];
	var body = [
		"was reportedly beset by rampaging swarms of environmentalists ",
		"was discovered sinking into a pool of quicksand ",
		"didn't stop believing, held on to that feeling ",
		"was caught fishing without a license ",
		"resurfaced in a Tibetan monastery ",
	];
	var end = [
		"late Wednesday night.",
		"early this morning.",
		"yesterday."
	];
//	var intro = ["abc","def"];
//	var body = ["abc","def"];
//	var end = ["abc","def"];
	var	randIndex = randomUpTo(intro.length-1);
	var sentence = intro[randIndex];
	randIndex = randomUpTo(body.length-1);
	sentence = sentence + body[randIndex];
	randIndex = randomUpTo(end.length-1);
	sentence = sentence + end[randIndex];
	document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
	return Math.floor(Math.random() * (max+1));
}
