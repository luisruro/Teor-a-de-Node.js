const fs = require("fs");

fs.readFile("require-example.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});