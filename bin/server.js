const serveIndex = require("serve-index");
const express = require("express");

const examples = express();
examples.use(express.static("examples"));
examples.use(serveIndex("examples", { icons: true }));

examples.listen(7999, "0.0.0.0", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`View debugger examples at http://localhost:7999`);
  }
});
