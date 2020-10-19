/*
References used
https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/
https://stackabuse.com/reading-and-writing-json-files-with-node-js/
*/

const fs = require("fs");

fs.readFile("records.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  let jsonData = JSON.parse(data);
  let index = Math.floor(jsonData.length / 2);

  let part1 = jsonData.slice(0, index);
  let part2 = jsonData.slice(index);

  fs.writeFile("recordsPart1.json", JSON.stringify(part1), (err) => {
    // Checking for errors
    if (err) {
      throw err;
    }
  });
  fs.writeFile("recordsPart2.json", JSON.stringify(part2), (err) => {
    // Checking for errors
    if (err) {
      throw err;
    }
  });
});
