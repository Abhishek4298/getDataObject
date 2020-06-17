const fs = require("fs");
const filename = "../data/dataPackleader.json";
let data = require(filename);
let path = require("path");

exports.list = function (req, res) {
	if (data.length === 0) {
		res.send("no data available");
	}
	res.send(data);
};

exports.specificData = function (req, res) {
	let objArray = [];
	data.allRelatedGroup.conceptGroup.forEach((element) => {
		if (element.hasOwnProperty("conceptProperties")) {
			element.conceptProperties.forEach(elementTwo => {
				let obj = {
					rxcui: elementTwo.rxcui,
					name: elementTwo.name
				}
				objArray.push(obj);
			});
		}
	});
	console.log("Obj Array: ", objArray);
	res.send(objArray);
}