//const fetch = require('node-fetch'); // maybe include this back in if the code fails to work?
const Discord = require("discord.js")

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function roll(rollString){
	let rollBreakdown = rollString.matchAll(/(\d+)d(\d+)/g);
	rollBreakdown = [...rollBreakdown];
	var totals = []
	rollBreakdown.forEach(function(arrayList){
		var total = 0;
  	for (i = 0; i < arrayList[1]; i++){
  		total += randomNum(1, arrayList[2]);
  	}
  	totals.push(total)
	});
	totals.forEach(function(num){
		rollString = rollString.replace(/\d+d\d+/, num);
	})
  var evaluatedRoll = eval(rollString);
  console.log(evaluatedRoll);
  return evaluatedRoll;
}

module.exports = async function (client, msg, args){ // module.exports = async function (msg, args){
  let keywords = "1d20";
  if (args.length > 0){
  	keywords = args.join("");
  }
  var result = roll(keywords);
  msg.channel.send("Your roll string: " + keywords);
  msg.channel.send("Your roll value: " + result);
}
